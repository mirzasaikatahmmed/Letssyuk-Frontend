
import { 
  Clock, 
  LineChart, 
  Dumbbell, 
  UserCircle, 
  Scale, 
  Sparkles,
} from 'lucide-react';
import { NotificationHeader } from './_components/NotificationHeader';
import { NotificationItem } from './_components/NotificationItem';


// Main Component
const PlayerNotifications = () => {
  const notifications = [
    {
      icon: Clock,
      title: "Update Your Meal & Nutrition Data",
      priority: "High Priority",
      description: "It's been 3 days since you last updated your meal and hydration logs. Accurate nutrition data helps our AI provide better performance recommendations.",
      time: "1m ago",
      actionText: "Update Nutrition"
    },
    {
      icon: LineChart,
      title: "Performance Insight Available",
      priority: "Medium",
      description: "Your AI career analysis is ready. We've identified 3 key areas for development based on your recent training data.",
      time: "2h ago",
      actionText: "View Insights"
    },
    {
      icon: Dumbbell,
      title: "Training Routine Needs Update",
      priority: "High Priority",
      description: "You haven't logged your training sessions in 4 days. Regular training updates improve AI accuracy by 40%.",
      time: "1h ago",
      actionText: "Log Training"
    },
    {
      icon: UserCircle,
      title: "Profile Completion Milestone",
      description: "Congratulations! You've completed 85% of your athlete profile. Complete the remaining sections to unlock advanced AI features.",
      time: "1d ago",
      actionText: "Complete Profile"
    },
    {
      icon: Scale,
      title: "Physical Measurements Need Updating",
      priority: "Medium",
      description: "Your height, weight, and body composition data hasn't been updated in 30 days. Update your physical profile for accurate performance tracking.",
      time: "2d ago",
      actionText: "Update Physical Data"
    },
    {
      icon: Sparkles,
      title: "New AI Features Available",
      description: "We've launched new AI-powered nutrition recommendations and recovery tracking. Check out what's new in your dashboard.",
      time: "6d ago",
      actionText: "Explore Features"
    }
  ];

  return (
    <div className="bg-[#0B0E14] min-h-screen p-4 md:p-8 space-y-8 font-sans">
      <div className="max-w-5xl  space-y-8">
        <NotificationHeader
          onClearAll={() => console.log('Clearing all')}
          onMarkAllRead={() => console.log('Marking all read')}
        />

        <div className="space-y-4">
          {notifications.map((notif, index) => (
            <NotificationItem key={index} {...notif} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerNotifications;