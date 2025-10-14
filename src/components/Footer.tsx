import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-8 px-4 backdrop-blur-xl bg-black/30">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap">
            © 2025{" "}
            <span className="font-semibold bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent">
              Hack Revolution
            </span>
            {/* <Heart className="h-4 w-4 text-red-500 fill-red-500 inline-block animate-pulse" />{" "} */}
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
