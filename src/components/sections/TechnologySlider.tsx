import { technologies } from '@/data/technologies';

const TechnologySlider = () => {
  return (
    <div className="relative overflow-hidden py-6" aria-label="Technologies I use">
      <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-4">
        Technologies
      </p>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex animate-[scroll_25s_linear_infinite] gap-8 pr-8" aria-hidden="true">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2">
              <img
                src={tech.image}
                alt={tech.name}
                width={44}
                height={44}
                className="object-contain opacity-80"
                loading="lazy"
              />
              <span className="text-sm text-gray-400">{tech.name}</span>
            </div>
          ))}
          {technologies.map((tech) => (
            <div key={`${tech.name}-duplicate`} className="flex items-center gap-2">
              <img
                src={tech.image}
                alt={tech.name}
                width={44}
                height={44}
                className="object-contain opacity-80"
                loading="lazy"
              />
              <span className="text-sm text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll {0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
    </div>
  );
};

export default TechnologySlider;
