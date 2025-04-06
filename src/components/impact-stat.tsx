
type ImpactStatProps = {
  value: string | number;
  label: string;
  color?: string;
  icon?: React.ReactNode;
};

const ImpactStat = ({ value, label, color = "bg-heritix-100", icon }: ImpactStatProps) => {
  return (
    <div className={`impact-stat ${color}`}>
      {icon && <div className="mb-2">{icon}</div>}
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400 text-center">{label}</span>
    </div>
  );
};

export default ImpactStat;
