import { Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            African Digital Trade Portal
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
