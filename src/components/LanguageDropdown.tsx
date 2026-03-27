// LanguageDropdown.tsx
import { ChevronDown, Search } from "lucide-react";
import { changeLanguage, isTranslateReady } from "../hooks/useGoogleTranslate";
import { useCallback, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export interface Language {
    code: string;
    name: string;
}

const languages: Language[] = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" },
    { code: "es", name: "Spanish" },
    { code: "bn", name: "Bengali" },
    { code: "hi", name: "Hindi" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh-CN", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "ru", name: "Russian" },
    { code: "pt", name: "Portuguese" },
    { code: "it", name: "Italian" },
    { code: "th", name: "Thai" },
];

interface LanguageDropdownProps {
    onLanguageChange?: (language: Language) => void;
}

export const LanguageDropdown = ({ onLanguageChange }: LanguageDropdownProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [ready, setReady] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Apply RTL for Arabic and other RTL languages
    useEffect(() => {
        if (selectedLanguage.code === 'ar' || selectedLanguage.code === 'he' || selectedLanguage.code === 'fa' || selectedLanguage.code === 'ur') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
        document.documentElement.lang = selectedLanguage.code;
    }, [selectedLanguage.code]);

    // Check if Google Translate is ready
    useEffect(() => {
        console.log('[LanguageDropdown] Checking if Google Translate is ready...');

        let isMounted = true;

        const checkReady = () => {
            if (!isMounted) return;

            if (isTranslateReady()) {
                console.log('[LanguageDropdown] ✅ Google Translate is ready!');
                setReady(true);

                // Load saved language after ready
                loadSavedLanguage();
            } else {
                setTimeout(checkReady, 300);
            }
        };

        // Start checking after a short delay
        const timer = setTimeout(checkReady, 500);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    const loadSavedLanguage = useCallback(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            try {
                const lang = JSON.parse(savedLanguage);
                console.log('[LanguageDropdown] Restoring saved language:', lang);
                setSelectedLanguage(lang);

                // Apply the saved language
                setTimeout(() => {
                    changeLanguage(lang.code).catch(err => {
                        console.error('[LanguageDropdown] Failed to restore language:', err);
                    });
                }, 300);
            } catch (e) {
                console.error('[LanguageDropdown] Failed to parse saved language:', e);
                localStorage.removeItem('selectedLanguage');
            }
        }
    }, []);

    const handleLanguageChange = useCallback(async (language: Language) => {
        console.log('[LanguageDropdown] Language change requested:', language);

        if (!ready) {
            console.warn('[LanguageDropdown] Translation not ready yet');
            return;
        }

        setSelectedLanguage(language);
        setIsDropdownOpen(false);
        setSearchQuery("");

        // Save to localStorage
        try {
            localStorage.setItem('selectedLanguage', JSON.stringify(language));
        } catch (e) {
            console.error('[LanguageDropdown] Failed to save language:', e);
        }

        // Notify parent component if callback provided
        if (onLanguageChange) {
            onLanguageChange(language);
        }

        // Change language
        try {
            const success = await changeLanguage(language.code);
            if (!success) {
                console.error('[LanguageDropdown] Language change failed');
            }
        } catch (error) {
            console.error('[LanguageDropdown] Error changing language:', error);
        }
    }, [ready, onLanguageChange]);

    return (
        <div className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center bg-[#162129] border border-gray-700 space-x-2 text-sm px-3 py-2 rounded-lg text-white hover:bg-[#1f2e38] transition-colors"
                title={ready ? 'Change Language' : 'Loading translation...'}
                disabled={!ready}
            >
                <span>{selectedLanguage.name}</span>
                <ChevronDown className="h-4 w-4" />

                {/* Loading indicator when translate not ready */}
                {!ready && (
                    <LoadingSpinner size="sm" text="" color="text-gray-400" />
                )}
            </button>

            {isDropdownOpen && (
                <>
                    <div className="absolute right-0 mt-2 w-56 bg-[#162129] border border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden flex flex-col">
                        <div className="p-2 border-b border-gray-700">
                            <div className="flex items-center bg-[#0B0E14] px-2 py-1 rounded-md border border-gray-800">
                                <Search className="w-4 h-4 text-gray-500 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search (e.g. bn)"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent text-white text-sm px-2 py-1 outline-none placeholder-gray-500"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                            {languages.filter((l) => l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.code.toLowerCase().includes(searchQuery.toLowerCase())).length > 0 ? (
                                languages.filter((l) => l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.code.toLowerCase().includes(searchQuery.toLowerCase())).map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language)}
                                        disabled={!ready}
                                        className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm hover:bg-[#1f2e38] transition-colors ${selectedLanguage.code === language.code
                                            ? 'bg-[#1f2e38] text-white font-semibold'
                                            : 'text-gray-300'
                                            } ${!ready
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'cursor-pointer'
                                            }`}
                                    >
                                        <span>{language.name}</span>
                                        {selectedLanguage.code === language.code && (
                                            <span className="ml-auto text-[#53DDF5] text-xs">✓</span>
                                        )}
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-6 text-sm text-gray-500 text-center">
                                    No language found
                                </div>
                            )}
                        </div>

                        {!ready && (
                            <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-700 text-center">
                                Loading translation...
                            </div>
                        )}
                    </div>

                    {/* Backdrop to close dropdown */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => {
                            setIsDropdownOpen(false);
                            setSearchQuery("");
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default LanguageDropdown;
