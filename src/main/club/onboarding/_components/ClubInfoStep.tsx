
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useEffect } from 'react';
import { useUpsertClubInfoMutation, useGetClubOnboardingQuery } from '@/redux/api/clubOnboardingApi';
import { toast } from 'sonner';
import Loading from '@/components/share/Loading/Loading';

interface ClubInfoStepProps {
  onNext: () => void;
}

export default function ClubInfoStep({ onNext }: ClubInfoStepProps) {
  const [clubName, setClubName] = useState("");
  const [country, setCountry] = useState("");
  const [leagueLevel, setLeagueLevel] = useState("");
  const [clubWebsite, setClubWebsite] = useState("");

  const { data: onboardingData, isLoading: isFetching } = useGetClubOnboardingQuery({});
  const [upsertClubInfo, { isLoading: isSubmitting }] = useUpsertClubInfoMutation();

  // Load existing data if user comes back to this step
  useEffect(() => {
    if (onboardingData?.club) {
      setClubName(onboardingData.club.clubName || "");
      setCountry(onboardingData.club.country || "");
      setLeagueLevel(onboardingData.club.league || "");
      setClubWebsite(onboardingData.club.clubWebsite || "");
    }
  }, [onboardingData]);

  const handleNext = async () => {
    if (!clubName || !country || !leagueLevel) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
     const res= await upsertClubInfo({
        clubName: clubName,
        country: country,
        league: leagueLevel,
        clubWebsite: clubWebsite || undefined,
      }).unwrap();

      console.log(res);
      
      toast.success('Club information saved successfully!');
      onNext();
    } catch (error) {
      console.error('Failed to save club info:', error);
      toast.error('Failed to save club information. Please try again.');
    }
  };

const countries = [
  'ENGLAND', 'SPAIN', 'GERMANY', 'ITALY', 'FRANCE', 'PORTUGAL',
  'NETHERLANDS', 'BELGIUM', 'TURKEY', 'SCOTLAND', 'SWITZERLAND',
  'AUSTRIA', 'GREECE', 'DENMARK', 'SWEDEN', 'NORWAY', 'POLAND',
  'UKRAINE', 'CZECH_REPUBLIC', 'CROATIA'
];

const leagueLevels = [
  'PREMIER_LEAGUE', 'LA_LIGA', 'BUNDESLIGA', 'SERIE_A', 'LIGUE_1',
  'PRIMEIRA_LIGA', 'EREDIVISIE', 'JUPILER_PRO_LEAGUE', 'SUPER_LIG',
  'SCOTTISH_PREMIERSHIP', 'SWISS_SUPER_LEAGUE', 'AUSTRIAN_BUNDESLIGA',
  'SUPER_LEAGUE_GREECE', 'DANISH_SUPERLIGA', 'ALLSVENSKAN', 'ELITESERIEN',
  'EKSTRAKLASA', 'UKRAINIAN_PREMIER_LEAGUE', 'CZECH_FIRST_LEAGUE', 'HNL_CROATIA'
];

const formatString = (str: string) => {
  return str.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};

  if (isFetching) {
    return <Loading count={3} className='bg-transparent max-w-2xl mx-auto'/>
  }

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A] ">
      <h2 className="text-2xl font-bold text-white mb-2">Club Information</h2>
      <p className="text-gray-400 text-sm mb-6">
        This helps us tailor analytics and recruitment insights for your competition level.
      </p>

      <div className="space-y-6">
        {/* Club Name */}
        <div>
          <Label htmlFor="clubName" className="text-white mb-2 block">
            Club Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="clubName"
            placeholder="e.g., Arsenal FC"
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
        </div>

        {/* Country and League */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="country" className="text-white mb-2 block">
              Country <span className="text-red-400">*</span>
            </Label>
            <Select
              value={country}
              onValueChange={(value) => setCountry(value)}
            >
              <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white w-full cursor-pointer">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-slate-700 ">
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {formatString(country)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="league" className="text-white mb-2 block">
              League / Competition Level <span className="text-red-400">*</span>
            </Label>
            <Select
              value={leagueLevel}
              onValueChange={(value) => setLeagueLevel(value)}
            >
              <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white  w-full">
                <SelectValue placeholder="Select League" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-slate-700">
                {leagueLevels.map((league) => (
                  <SelectItem key={league} value={league}>
                    {formatString(league)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Club Website */}
        <div>
          <Label htmlFor="website" className="text-white mb-2 block">
            Club Website <span className="text-gray-500 text-xs">(optional)</span>
          </Label>
          <Input
            id="website"
            type="url"
            placeholder="https://www.yourclub.com"
            value={clubWebsite}
            onChange={(e) => setClubWebsite(e.target.value)}
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <Button
          onClick={handleNext}
          disabled={isSubmitting}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-lg  cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Next →'}
        </Button>
      </div>
    </div>
  );
}
