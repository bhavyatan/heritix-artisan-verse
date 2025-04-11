
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

type JourneyCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  artisanName: string;
};

const JourneyCard = ({ id, title, description, image, progress, artisanName }: JourneyCardProps) => {
  const { t } = useTranslation();
  return (
    <Link to={`/journeys/${id}`}>
      <div className="art-journey-card">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="text-white text-xs">{t("journeys.by", { artisanName })}</p>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-serif text-lg font-medium line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>{t("journeys.progress")}</span>
              <span>{t("journeys.progressPercent", { progress })}</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JourneyCard;
