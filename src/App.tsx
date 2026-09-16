import { useMemo, useState } from "react";
import catalogo from "@/data/catalogo.json";

const WA_NUMBER = "573229705728";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20cotizar%20pines%20y%20llaveros`;

type CatalogoItem = {
  id: string;
  ref: number;
  nombre: string;
  categoria: string;
  tipo: "Pin" | "Llavero";
  imagen: string;
};

const CATALOGO = catalogo as CatalogoItem[];

// ── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: "Enfermería", icon: "🩺" },
  { label: "Medicina", icon: "⚕️" },
  { label: "Odontología", icon: "🦷" },
  { label: "Fisioterapia", icon: "🤲" },
  { label: "Psicología", icon: "🧠" },
  { label: "Veterinaria", icon: "🐾" },
  { label: "APH", icon: "🚑" },
  { label: "Chef", icon: "👨‍🍳" },
  { label: "Abogado", icon: "⚖️" },
  { label: "Ingeniero", icon: "⚙️" },
  { label: "Farmacia", icon: "💊" },
  { label: "Llaveros", icon: "🔑" },
];

const BENEFITS = [
  {
    icon: "⚒️",
    title: "Fabricación propia en ZAMAK",
    desc: "Producimos cada pieza en nuestro taller con aleación ZAMAK de alta calidad. Control total del proceso, acabados superiores y tiempos de entrega confiables.",
  },
  {
    icon: "📦",
    title: "+90 referencias disponibles",
    desc: "El catálogo más completo de pines y llaveros profesionales de Bogotá. Desde salud hasta gastronomía, tenemos la pieza que tu carrera técnica o profesional merece.",
  },
  {
    icon: "🏪",
    title: "Mayor y detal",
    desc: "Precios especiales para pedidos al por mayor. También vendemos al detal para quien necesita una sola pieza especial.",
  },
  {
    icon: "🕐",
    title: "Atención 24 horas",
    desc: "Estamos disponibles todo el día, todos los días. Cotiza a cualquier hora y recibe respuesta inmediata por WhatsApp.",
  },
];

// ── Subcomponents ─────────────────────────────────────────────────────────────

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <img src="/logo-icon.png" alt="Microfundiciones Pérez" className="h-9 w-auto" />
      <span
        style={{
          fontFamily: "var(--font-display)",
          color: "#f5f0e8",
          fontSize: 15,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
        }}
      >
        Microfundiciones
        <br />
        <span style={{ color: "#c9a84c" }}>Pérez</span>
      </span>
    </span>
  );
}

function NavBar({ onCotizar }: { onCotizar: () => void }) {
  const [open, setOpen] = useState(false);
  const links = ["Categorías", "Productos", "Nosotros", "Contacto"];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(17,17,17,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}`}
              className="text-sm transition-colors duration-200"
              style={{ color: "#9a9a9a", letterSpacing: "0.04em" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a84c")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a9a9a")}
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          className="hidden md:block btn-gold text-sm font-semibold px-5 py-2 rounded-full"
          style={{ color: "#111", fontFamily: "var(--font-sans)" }}
          onClick={onCotizar}
        >
          Cotizar ahora
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "#c9a84c" }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            ) : (
              <>
                <rect y="4" width="22" height="2" rx="1" />
                <rect y="10" width="22" height="2" rx="1" />
                <rect y="16" width="22" height="2" rx="1" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(17,17,17,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}`}
              className="text-sm py-2 border-b"
              style={{ color: "#9a9a9a", borderColor: "rgba(201,168,76,0.1)" }}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button
            className="btn-gold text-sm font-semibold px-5 py-3 rounded-full mt-2"
            style={{ color: "#111" }}
            onClick={() => { setOpen(false); onCotizar(); }}
          >
            Cotizar ahora
          </button>
        </div>
      )}
    </header>
  );
}

function Hero({ onCotizar }: { onCotizar: () => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, #111 60%)" }}
    >
      {/* Background texture grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero image collage */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none hidden lg:block">
        <div
          className="absolute right-12 top-24 w-64 h-64 rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.8)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1562714442-5a027fb1300c?w=640&h=640&fit=crop&auto=format"
            alt="Colección de pines metálicos"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.9) saturate(0.85)" }}
          />
        </div>
        <div
          className="absolute right-72 top-48 w-48 h-48 rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.7)", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1770283555098-e152e212fec8?w=480&h=480&fit=crop&auto=format"
            alt="Pin dorado en solapa"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.85)" }}
          />
        </div>
        <div
          className="absolute right-16 top-80 w-36 h-36 rounded-xl overflow-hidden"
          style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.6)", border: "1px solid rgba(201,168,76,0.1)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1614111662625-a024f2759e19?w=320&h=320&fit=crop&auto=format"
            alt="Monedas metálicas doradas"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
        {/* Gold haze overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, #111 0%, transparent 40%, #111 100%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 lg:pt-0">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
              Fabricación propia · Bogotá, Colombia
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              color: "#f5f0e8",
              marginBottom: "1.5rem",
            }}
          >
            Pines y llaveros
            <br />
            <em style={{ color: "#c9a84c" }}>para carreras</em>
            <br />
            técnicas y profesionales
          </h1>

          <p style={{ color: "#9a9a9a", fontSize: 17, lineHeight: 1.7, maxWidth: 420, marginBottom: "2.5rem" }}>
            Fabricamos en ZAMAK con los acabados más finos. +90 referencias para salud,
            derecho, gastronomía, ingeniería y más. Mayor y detal desde Bogotá para todo Colombia.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="btn-gold flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base"
              style={{ color: "#111" }}
              onClick={onCotizar}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.546 5.877L0 24l6.293-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.862 9.862 0 01-5.03-1.375l-.361-.214-3.735.901.945-3.635-.234-.373A9.844 9.844 0 012.118 12C2.118 6.53 6.53 2.118 12 2.118c5.47 0 9.882 4.412 9.882 9.882 0 5.47-4.412 9.882-9.882 9.882z" />
              </svg>
              Cotizar por WhatsApp
            </button>
            <a
              href="#productos"
              className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base border transition-colors"
              style={{ color: "#c9a84c", borderColor: "rgba(201,168,76,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              Ver catálogo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
            {[
              { value: "+90", label: "Referencias" },
              { value: "24h", label: "Atención" },
              { value: "100%", label: "ZAMAK puro" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#c9a84c" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#6b6b6b", letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "#c9a84c" }}>SCROLL</div>
        <div className="w-px h-8" style={{ background: "linear-gradient(#c9a84c, transparent)" }} />
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categorias" className="py-24" style={{ background: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
            <span style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Catálogo</span>
            <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f5f0e8" }}
          >
            Todas las carreras técnicas<br />
            y <em style={{ color: "#c9a84c" }}>profesionales</em>
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20cotizar%20pines%20de%20${encodeURIComponent(cat.label)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="category-pill flex flex-col items-center gap-2 px-3 py-5 rounded-xl border text-center"
              style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(255,255,255,0.02)" }}
            >
              <span style={{ fontSize: 28 }}>{cat.icon}</span>
              <span style={{ fontSize: 12, color: "#9a9a9a", fontWeight: 500 }}>{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalogo() {
  const [tipo, setTipo] = useState<"Todos" | "Pin" | "Llavero">("Todos");
  const [categoria, setCategoria] = useState<string>("Todas");

  const categoriasDisponibles = useMemo(() => {
    const base = tipo === "Todos" ? CATALOGO : CATALOGO.filter((item) => item.tipo === tipo);
    return Array.from(new Set(base.map((item) => item.categoria))).sort();
  }, [tipo]);

  const items = useMemo(() => {
    return CATALOGO.filter((item) => {
      if (tipo !== "Todos" && item.tipo !== tipo) return false;
      if (categoria !== "Todas" && item.categoria !== categoria) return false;
      return true;
    });
  }, [tipo, categoria]);

  const handleTipo = (next: "Todos" | "Pin" | "Llavero") => {
    setTipo(next);
    setCategoria("Todas");
  };

  return (
    <section id="productos" className="py-24" style={{ background: "#111" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Catálogo completo</span>
            <div className="w-8 h-px" style={{ background: "#c9a84c" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f5f0e8" }}>
            Piezas seleccionadas
          </h2>
        </div>

        <div className="flex flex-col items-center gap-5 mb-10">
          <div className="flex rounded-full border p-1" style={{ borderColor: "rgba(201,168,76,0.25)" }}>
            {(["Todos", "Pin", "Llavero"] as const).map((t) => (
              <button
                key={t}
                onClick={() => handleTipo(t)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
                style={
                  tipo === t
                    ? { background: "#c9a84c", color: "#111" }
                    : { color: "#9a9a9a" }
                }
              >
                {t === "Todos" ? "Todos" : t === "Pin" ? "Pines" : "Llaveros"}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setCategoria("Todas")}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors"
              style={
                categoria === "Todas"
                  ? { borderColor: "#c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }
                  : { borderColor: "rgba(201,168,76,0.15)", color: "#9a9a9a" }
              }
            >
              Todas las categorías
            </button>
            {categoriasDisponibles.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors"
                style={
                  categoria === cat
                    ? { borderColor: "#c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }
                    : { borderColor: "rgba(201,168,76,0.15)", color: "#9a9a9a" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <a
              key={item.id}
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Hola, me interesa el ${item.tipo.toLowerCase()} ref. ${item.ref} - ${item.nombre}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-product block rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(201,168,76,0.12)", background: "#1a1a1a" }}
            >
              <div className="relative aspect-square flex items-center justify-center p-4" style={{ background: "#151515" }}>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
                <div
                  className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-semibold"
                  style={{ background: "rgba(17,17,17,0.8)", color: "#c9a84c", backdropFilter: "blur(4px)", letterSpacing: "0.06em" }}
                >
                  Ref. {item.ref}
                </div>
              </div>
              <div className="p-4">
                <div style={{ fontSize: 14, color: "#f5f0e8", fontWeight: 600, marginBottom: 2 }}>{item.nombre}</div>
                <div style={{ fontSize: 12, color: "#6b6b6b" }}>{item.tipo} · {item.categoria}</div>
                <div
                  className="mt-3 flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "#c9a84c" }}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.546 5.877L0 24l6.293-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.862 9.862 0 01-5.03-1.375l-.361-.214-3.735.901.945-3.635-.234-.373A9.844 9.844 0 012.118 12C2.118 6.53 6.53 2.118 12 2.118c5.47 0 9.882 4.412 9.882 9.882 0 5.47-4.412 9.882-9.882 9.882z" />
                  </svg>
                  Pedir por WhatsApp
                </div>
              </div>
            </a>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center py-16" style={{ color: "#6b6b6b" }}>
            No hay piezas en esta categoría todavía.
          </p>
        )}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="nosotros" className="py-24" style={{ background: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
            <span style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Por qué elegirnos</span>
            <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f5f0e8" }}>
            Fabricamos con orgullo<br />
            <em style={{ color: "#c9a84c" }}>desde Bogotá</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="p-7 rounded-2xl border flex flex-col gap-4"
              style={{ borderColor: "rgba(201,168,76,0.12)", background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                {b.icon}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "#f5f0e8", marginBottom: 8 }}>{b.title}</div>
                <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image strip */}
        <div className="mt-14 grid grid-cols-3 gap-4 rounded-2xl overflow-hidden" style={{ height: 180 }}>
          {[
            "https://images.unsplash.com/photo-1566107222733-864261c6ae3c?w=600&h=360&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1550345842-7a78353df7ae?w=600&h=360&fit=crop&auto=format",
            "https://images.unsplash.com/photo-1574097638739-725b61f511a5?w=600&h=360&fit=crop&auto=format",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden bg-zinc-900">
              <img
                src={src}
                alt="Pines metálicos"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.7) saturate(0.6)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.6), transparent)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onCotizar }: { onCotizar: () => void }) {
  return (
    <section id="contacto" className="py-24" style={{ background: "#111" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
            <span style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Contáctanos</span>
            <div className="w-12 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f5f0e8" }}>
            Estamos siempre<br />
            <em style={{ color: "#c9a84c" }}>disponibles</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info card */}
          <div
            className="p-8 rounded-2xl border flex flex-col gap-6"
            style={{ borderColor: "rgba(201,168,76,0.15)", background: "#1a1a1a" }}
          >
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)" }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.546 5.877L0 24l6.293-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.862 9.862 0 01-5.03-1.375l-.361-.214-3.735.901.945-3.635-.234-.373A9.844 9.844 0 012.118 12C2.118 6.53 6.53 2.118 12 2.118c5.47 0 9.882 4.412 9.882 9.882 0 5.47-4.412 9.882-9.882 9.882z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#6b6b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>WhatsApp</div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 20, color: "#f5f0e8", fontWeight: 600, fontFamily: "var(--font-display)" }}
                >
                  +57 322 9705728
                </a>
              </div>
            </div>

            <div className="gold-line" />

            {/* Address */}
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#6b6b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Dirección</div>
                <div style={{ fontSize: 16, color: "#f5f0e8", lineHeight: 1.5 }}>
                  Cl. 30 Sur # 12H-94<br />
                  <span style={{ color: "#9a9a9a", fontSize: 14 }}>Rafael Uribe Uribe, Bogotá D.C.</span>
                </div>
              </div>
            </div>

            <div className="gold-line" />

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#6b6b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Horario</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#25d366" }} />
                  <div style={{ fontSize: 16, color: "#f5f0e8", fontWeight: 600 }}>Abierto 24 horas</div>
                </div>
                <div style={{ fontSize: 13, color: "#6b6b6b", marginTop: 2 }}>Todos los días, sin excepción</div>
              </div>
            </div>

            <button
              className="btn-gold flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold"
              style={{ color: "#111", marginTop: 8 }}
              onClick={onCotizar}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.546 5.877L0 24l6.293-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.862 9.862 0 01-5.03-1.375l-.361-.214-3.735.901.945-3.635-.234-.373A9.844 9.844 0 012.118 12C2.118 6.53 6.53 2.118 12 2.118c5.47 0 9.882 4.412 9.882 9.882 0 5.47-4.412 9.882-9.882 9.882z" />
              </svg>
              Enviar mensaje ahora
            </button>
          </div>

          {/* Google Maps embed */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(201,168,76,0.15)", minHeight: 360 }}
          >
            <iframe
              title="Ubicación Microfundiciones Pérez"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.826219370965!2d-74.10490168573!3d4.567390043643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a8f0e8f0e8f%3A0x0!2sCl.%2030%20Sur%20%2312H-94%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1694000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6)", minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Logo />
            <p style={{ color: "#6b6b6b", fontSize: 13, marginTop: 12, maxWidth: 300, lineHeight: 1.6 }}>
              Fabricantes de pines y llaveros en ZAMAK para todas las carreras técnicas y profesionales.
              Bogotá, Colombia. Atención 24 horas.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div style={{ fontSize: 11, color: "#6b6b6b", letterSpacing: "0.15em", textTransform: "uppercase" }}>Categorías</div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
              {CATEGORIES.slice(0, 8).map((c) => (
                <a
                  key={c.label}
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: "#6b6b6b" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a84c")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6b6b6b")}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-line mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: 12, color: "#6b6b6b" }}>
            © {new Date().getFullYear()} Microfundiciones Pérez. Bogotá, Colombia.
          </p>
          <p style={{ fontSize: 12, color: "#6b6b6b" }}>
            Cl. 30 Sur # 12H-94, Rafael Uribe Uribe · Abierto 24h
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{ background: "#25d366" }}
      aria-label="Chatear por WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.546 5.877L0 24l6.293-1.519A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.862 9.862 0 01-5.03-1.375l-.361-.214-3.735.901.945-3.635-.234-.373A9.844 9.844 0 012.118 12C2.118 6.53 6.53 2.118 12 2.118c5.47 0 9.882 4.412 9.882 9.882 0 5.47-4.412 9.882-9.882 9.882z" />
      </svg>
    </a>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const handleCotizar = () => {
    window.open(WA_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <NavBar onCotizar={handleCotizar} />
      <Hero onCotizar={handleCotizar} />
      <Categories />
      <Catalogo />
      <Benefits />
      <Contact onCotizar={handleCotizar} />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
