
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

type SupportButtonProps = {
  artisanName: string;
  onClick: () => void;
};

const SupportButton = ({ artisanName, onClick }: SupportButtonProps) => {
  const { t } = useTranslation();
  
  return (
    <Button 
      onClick={onClick}
      className="bg-heritix-600 hover:bg-heritix-700 text-white flex items-center gap-2 px-4 py-2 rounded-md w-full md:w-auto"
    >
      <Heart className="h-4 w-4" />
      <span>Support {artisanName}</span>
    </Button>
  );
};

export default SupportButton;
