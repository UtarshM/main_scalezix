const links = {
  Product: ["Services", "Pricing", "Features", "Integrations"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "Help Center", "API Reference", "Status"],
  Legal: ["Privacy", "Terms", "Security"],
};

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <span className="font-heading text-lg font-bold text-foreground">Scalezix</span>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-xs">
            Scale smarter with AI automation.
          </p>
        </div>
        {Object.entries(links).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">{category}</h4>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Scalezix. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Twitter", "LinkedIn", "GitHub"].map((s) => (
            <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
