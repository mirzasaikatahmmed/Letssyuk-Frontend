import { 
  Building2, 
  User2, 
  Users, 
  Target, 
  UserPlus2, 
  FileText, 
  ClipboardCheck,
  Check, 
  Circle
} from 'lucide-react';

interface Step {
  id: number;
  label: string;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
}

export default function StepIndicator({
  currentStep,
  steps,
}: StepIndicatorProps) {
  
  // Step onujayi specific icon return korar function
  const getStepIcon = (stepId: number, isCompleted: boolean) => {
    if (isCompleted) return <Check className="w-5 h-5" />;

    switch (stepId) {
      case 1: return <Building2 className="w-5 h-5" />; 
      case 2: return <User2 className="w-5 h-5" />;   
      case 3: return <Users className="w-5 h-5" />;    
      case 4: return <Target className="w-5 h-5" />;    
      case 5: return <UserPlus2 className="w-5 h-5" />;  
      case 6: return <FileText className="w-5 h-5" />;   
      case 7: return <ClipboardCheck className="w-5 h-5" />; 
      default: return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex items-center gap-0">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    isActive || isCompleted
                      ? 'border-[#53DDF5] bg-[#0B0E14] text-[#53DDF5]'
                      : 'border-gray-700 bg-[#11161D] text-gray-600'
                  } ${isActive ? 'shadow-[0_0_15px_#53DDF540]' : ''}`}
                >
                  {getStepIcon(step.id, isCompleted)}
                </div>
                
                <span
                  className={`text-[10px] font-black uppercase tracking-widest mt-3 absolute translate-y-10 whitespace-nowrap ${
                    isActive || isCompleted ? 'text-[#53DDF5]' : 'text-gray-600'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={`w-12 md:w-16 h-[2px] mx-2 transition-all duration-500 ${
                    isCompleted ? 'bg-[#53DDF5]' : 'bg-gray-800'
                  }`} 
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}