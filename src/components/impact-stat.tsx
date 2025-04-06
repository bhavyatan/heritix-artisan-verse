
type ImpactStatProps = {
  value: string | number;
  label: string;
  color?: string;
  icon?: React.ReactNode;
};

const ImpactStat = ({ value, label, color = "bg-heritix-100", icon }: ImpactStatProps) => {
  return (
    <div className={`impact-stat ${color} dark:bg-opacity-20`}>
      {icon && <div className="mb-2">{icon}</div>}
      <span className="text-3xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground text-center">{label}</span>
    </div>
  );
};

export default ImpactStat;
