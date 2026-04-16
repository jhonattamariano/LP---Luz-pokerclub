import { useState, useCallback } from "react";
import { motion } from "motion/react";
import {
  Instagram,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Clock,
  ShieldCheck,
  Users,
  Trophy,
  Star,
  Quote,
  Menu,
  X,
} from "lucide-react";


import VideoModal from "./VideoModal";
import pokerImg from "./assets/logojulialuz.jpg";
import logoluz from "./assets/logoluz.png";
import logoback from "./assets/logobackground.png";

/* -------------------------------------------------------------------------- */
/* DADOS                                                                       */
/* -------------------------------------------------------------------------- */

const CLUBS = [
  {
    name: "PPPoker - LUZ 1",
    id: "ID: 3226242",
    link: "https://wa.me/31991423608",
    description:
      "O nosso primeiro clube online. Faz parte da liga SCPT. Cash Games e torneios 24 horas por dia. Saques e depósitos imediatos pela Chippix.",
    platform: "pppoker",
  },
  {
    name: "PPPoker - LUZ 2",
    id: "ID: 3531671",
    link: "https://wa.me/31991423608",
    description:
      "A expansão do Luz Club, agora na liga Evolution. Diversas mesas de cash e torneios com ótimos garantidos. Saques e depósitos imediatos pela Chippix.",
    platform: "pppoker",
  },
  {
    name: "PPPOKER - HOME GAMES",
    id: "ID: CONSULTAR",
    link: "https://wa.me/31991423608",
    description:
      "Cash e torneios com fields menores e mais recreativos. Clique no link abaixo para ter acesso aos clubes disponíveis.",
    platform: "pppoker",
  },
  {
    name: "SUPREMA - LUZ POKER",
    id: "ID: 44668",
    link: "https://wa.me/31991423608",
    // CORRIGIDO: removido ";N" — era typo de \n
    description:
      "A maior liga do mundo. Torneios com excelentes garantidos e cash com field gigantesco 24/7. Autoatendimento pelo Fichas24Horas.",
    platform: "suprema",
  },
];

const FEEDBACKS = [
  {
    name: "André",
    role: "Grinder",
    comment:
      "Jogar no clube da Luz é você ter confiança, segurança, sem contar que as fichas vem bem iluminadas.",
    rating: 5,
  },
  {
    name: "Tidex",
    role: "Jogador Profissional",
    comment:
      "Eu tenho a confiança em afirmar que o Luz Club é a melhor plataforma pra quem quer jogar esporte da mente online no Brasil.",
    rating: 5,
  },
  {
    name: "Henrique",
    role: "Jogador Regular",
    comment:
      "Eu indico pra todo mundo porque é um clube que tem tudo que um jogador precisa: ambiente seguro e saques rápidos.",
    rating: 5,
  },
];

const VIDEO_FEEDBACKS = [
  { id: "_nRR12DJuyg", title: "Depoimento 1" },
  { id: "JJkk-bHOjg0", title: "Depoimento 2" },
  { id: "mvufFalSmVg", title: "Depoimento 3" },
];


const PLATFORM_ICONS = {
  pppoker:
    "https://play-lh.googleusercontent.com/nvRcbo4P0CNuDvsnZYxtTMPTdIL2TtTlI8j70-5P8UcaGbbHTMHA5iNE397fc5ZEOA",
  suprema:
    "https://play-lh.googleusercontent.com/WfEy8lGHcWKCD-dmYBcPIL59SDsdZfr0cAPI1HwhLzpt76WGRoL0L71zJjI4y5DA2P4=w240-h480",
};


const VIEWPORT = { once: true, amount: 0.2 };


const FADE_UP = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const FADE_LEFT = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } };
const FADE_LEFT_50 = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } };
const SCALE_IN = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } };

/* -------------------------------------------------------------------------- */
/* COMPONENTE PRINCIPAL                                                        */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // useCallback evita recriar as funções a cada render
  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const closeVideo = useCallback(() => setSelectedVideo(null), []);

  return (
    <div className="min-h-screen font-sans bg-poker-dark text-poker-light bg-fixed bg-cover bg-center bg-hero-pattern selection:bg-poker-gold/30">

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/48996169605"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 text-white transition-all transform bg-green-500 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 lg:hidden"
        aria-label="Suporte via WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={28} />
      </a>

      {/* ------------------------------------------------------------------ */}
      {/* NAVEGAÇÃO                                                            */}
      {/* ------------------------------------------------------------------ */}
      <nav className="fixed top-0 z-50 w-full border-b backdrop-blur-md bg-poker-dark/80 border-white/5">
        <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <img
              src={logoluz}
              alt="Luz Poker"
              className="w-auto h-10 brightness-110 md:h-12"
              // CORRIGIDO: dimensões explícitas evitam layout shift
              width={120}
              height={48}
            />
          </div>

          <div className="hidden gap-8 text-xs font-bold uppercase lg:flex tracking-[0.2em] text-poker-light/60">
            <a href="#home" className="transition-colors hover:text-poker-gold">Início</a>
            {/* CORRIGIDO: semântica — "Gestora" leva para #gestora, não #about */}
            <a href="#gestora" className="transition-colors hover:text-poker-gold">Gestora</a>
            <a href="#clubs" className="transition-colors hover:text-poker-gold">Nossos Clubes</a>
            <a href="#feedbacks" className="transition-colors hover:text-poker-gold">Feedbacks</a>
            <a href="#tutorial" className="text-poker-gold hover:text-white transition-colors">Tutorial</a>
            <a
              href="https://instagram.com/luz.poker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Luz Poker"
              className="transition-colors hover:text-poker-gold"
            >
              <Instagram size={16} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/48996169605"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-poker-wine hover:bg-poker-wine-light text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg shadow-poker-wine/20"
            >
              Falar com Gestora
            </a>

            <button
              onClick={toggleMenu}
              className="p-2 transition-colors rounded-lg lg:hidden text-poker-gold hover:bg-white/5"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b lg:hidden bg-poker-dark border-white/5"
          >
            <div className="flex flex-col p-6 gap-6 text-sm font-bold uppercase tracking-widest text-poker-light/80">
              <a href="#home" onClick={closeMenu} className="py-2 border-b transition-colors hover:text-poker-gold border-white/5">Início</a>
              <a href="#gestora" onClick={closeMenu} className="py-2 border-b transition-colors hover:text-poker-gold border-white/5">Gestora</a>
              <a href="#clubs" onClick={closeMenu} className="py-2 border-b transition-colors hover:text-poker-gold border-white/5">Nossos Clubes</a>
              <a href="#feedbacks" onClick={closeMenu} className="py-2 border-b transition-colors hover:text-poker-gold border-white/5">Feedbacks</a>
              <a href="#tutorial" onClick={closeMenu} className="py-2 border-b transition-colors text-poker-gold hover:text-white border-white/5">Tutorial</a>
              <div className="flex items-center justify-between pt-4">
                <a
                  href="https://instagram.com/luz.poker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-poker-gold"
                >
                  <Instagram size={20} /> Instagram
                </a>
                <a
                  href="https://wa.me/48996169605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs font-bold uppercase rounded-full bg-poker-wine text-white tracking-widest"
                >
                  Falar com Gestora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                 */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="home"
        className="relative flex items-center justify-center pt-20 overflow-hidden min-h-[80vh] sm:h-screen"
      >
        <div className="absolute inset-0 z-0">
          {/* CORRIGIDO: loading="eager" no hero (above the fold) */}
          <img
            src={logoback}
            alt=""
            aria-hidden="true"
            className="object-cover w-full h-full scale-110 opacity-20"
            loading="eager"
            fetchPriority="high"
            width={2073}
            height={1382}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-poker-dark via-transparent to-poker-dark" />
        </div>

        <div className="relative z-10 w-full px-6 mx-auto text-center max-w-5xl">
          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
          >
            {/* CORRIGIDO: primeiro texto como <p> — não é heading */}
            <p className="mb-4 text-lg italic font-serif tracking-wide text-poker-gold md:text-2xl">
              Unindo Esporte e Autoconhecimento
            </p>

            <div className="flex justify-center mb-6 md:mb-8">
              <img
                src={logoluz}
                alt="Luz Club"
                className="object-contain w-auto h-32 sm:h-40 md:h-64 lg:h-80"
                width={320}
                height={320}
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <p className="max-w-2xl px-4 mx-auto mb-8 text-base font-light leading-relaxed md:text-xl text-poker-light/60 md:mb-12">
              Há mais de 6 anos no mercado, proporcionando a melhor experiência do esporte da mente online. Atendimento personalizado, 24 horas por dia.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row md:gap-6">
              <a
                href="#tutorial"
                className="w-full sm:w-auto bg-poker-gold text-poker-dark px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-poker-gold-dark transition-all flex items-center justify-center gap-2 shadow-xl shadow-poker-gold/10"
              >
                Veja como entrar <ChevronRight size={18} />
              </a>
              <a
                href="#clubs"
                className="w-full px-8 py-3.5 border transition-all md:px-10 md:py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Conhecer Clubes
              </a>
              <a
                href="https://instagram.com/luz.poker"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-3.5 border transition-all md:px-10 md:py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Seguir no Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TUTORIAL                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section id="tutorial" className="py-16 overflow-hidden border-b md:py-24 border-white/5">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row md:gap-16">

            <div className="w-full lg:w-1/2">
              <motion.div
                variants={FADE_LEFT}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
              >
                {/* CORRIGIDO: hierarquia de headings */}
                <p className="mb-4 text-lg italic font-serif text-poker-gold md:text-xl">Passo a Passo</p>
                <h2 className="mb-6 text-3xl font-bold leading-tight uppercase md:text-5xl tracking-tight md:mb-8">
                  VEJA COMO ENTRAR EM <br />
                  <span className="text-poker-gold">POUCOS MINUTOS</span>
                </h2>
                <p className="mb-8 text-base font-light leading-relaxed md:text-lg md:mb-10 text-poker-light/60">
                  Preparamos um tutorial rápido e prático para você começar a jogar agora mesmo. Siga as instruções do vídeo e garanta seu lugar nas melhores mesas de poker online.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#clubs"
                    className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase transition-all rounded-full bg-poker-gold text-poker-dark tracking-widest hover:bg-poker-gold-dark shadow-lg shadow-poker-gold/10"
                  >
                    IR PARA OS CLUBES <ChevronRight size={18} />
                  </a>
                  <a
                    href="https://wa.me/48996169605"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase transition-all border rounded-full border-white/10 hover:bg-white/5 tracking-widest"
                  >
                    SUPORTE WHATSAPP <MessageCircle size={18} />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center w-full lg:w-1/2">
              <motion.div
                variants={SCALE_IN}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 md:border-8 border-poker-dark-light shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-poker-dark-light relative group cursor-pointer"
                onClick={() => setSelectedVideo("4XfDS15rs-8")}
                role="button"
                aria-label="Assistir tutorial em vídeo"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedVideo("4XfDS15rs-8")}
              >
                <div className="absolute inset-0 z-10 flex items-center justify-center transition-all bg-black/40 group-hover:bg-black/20">
                  <div className="flex items-center justify-center transition-all transform rounded-full shadow-2xl w-16 h-16 md:w-20 md:h-20 bg-poker-gold group-hover:scale-110">
                    <div className="ml-1.5 md:ml-2 w-0 h-0 border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[16px] md:border-l-[20px] border-l-poker-dark border-b-[10px] md:border-b-[12px] border-b-transparent" />
                  </div>
                  <div className="absolute left-0 right-0 text-center bottom-8">
                    <span className="px-4 py-2 text-[10px] font-bold uppercase border rounded-full bg-poker-dark/80 text-poker-gold border-poker-gold/30 tracking-widest">
                      Assistir Tutorial
                    </span>
                  </div>
                </div>
                <img
                  src="https://img.youtube.com/vi/4XfDS15rs-8/maxresdefault.jpg"
                  alt="Thumbnail do tutorial de como entrar no Luz Club"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={320}
                  height={568}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STATS / FEATURES                                                     */}
      {/* ------------------------------------------------------------------ */}

      <section id="about" className="py-16 border-y md:py-24 bg-poker-dark/40 backdrop-blur-sm border-white/5">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-4">

            {[
              { icon: <Clock size={28} className="md:w-8 md:h-8" />, title: "24 Horas", desc: "Ação ininterrupta todos os dias." },
              { icon: <ShieldCheck size={28} className="md:w-8 md:h-8" />, title: "Segurança", desc: "Transparência e rapidez há 6 anos." },
              { icon: null, title: "CHIPPIX", desc: "Saques automatizados via Chippix.", isChippix: true },
              { icon: <Users size={28} className="md:w-8 md:h-8" />, title: "Comunidade", desc: "Foco no seu desenvolvimento pessoal." },
              { icon: <Trophy size={28} className="md:w-8 md:h-8" />, title: "Prêmios", desc: "Acesso às maiores ligas do mercado." },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                {item.isChippix ? (
                  <div className="mx-auto mb-4 overflow-hidden border transition-all duration-500 w-12 h-12 md:w-16 md:h-16 bg-white/5 border-white/10 rounded-2xl group-hover:border-poker-gold/50 shadow-inner flex items-center justify-center">
                    <img
                      src="https://play-lh.googleusercontent.com/KjEFZCyWGvwxAFOygV2-slaZJiemgjqSnCv4l8eS0p-u-CjQLFTyaWWI_Uc4wzJsng=w240-h480"
                      alt="Chippix"
                      className="object-cover p-1.5 md:p-2"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 transition-all duration-500 md:w-16 md:h-16 rounded-2xl bg-poker-gold/5 text-poker-gold group-hover:bg-poker-gold group-hover:text-poker-dark">
                    {item.icon}
                  </div>
                )}
                <h3 className="mb-1 text-xs font-bold uppercase tracking-widest md:text-sm md:mb-2 text-poker-light">{item.title}</h3>
                <p className="text-poker-light/40 text-[10px] md:text-[11px] px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GESTORA                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section id="gestora" className="py-16 overflow-hidden md:py-24">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:gap-16 md:flex-row">

            <div className="relative w-full md:w-1/2">
              <motion.div
                variants={FADE_LEFT_50}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                className="relative z-10 overflow-hidden border rounded-3xl aspect-[1/1] sm:aspect-[4/5] border-white/5"
              >
                <img
                  src={pokerImg}
                  alt="Júlia Luz — Gestora do Luz Club"
                  className="object-cover w-full h-full transition-all duration-700"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute w-48 h-48 rounded-full -bottom-6 -right-6 bg-poker-wine/10 blur-3xl" aria-hidden="true" />
              <div className="absolute w-48 h-48 rounded-full -top-6 -left-6 bg-poker-gold/5 blur-3xl" aria-hidden="true" />
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                variants={FADE_UP}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
              >
                <p className="mb-4 text-xl italic font-serif text-poker-gold">Liderança e Visão</p>
                <h2 className="mb-8 text-4xl font-bold leading-tight uppercase md:text-5xl tracking-tight">
                  CONHEÇA A <br />
                  <span className="text-poker-wine">JÚLIA LUZ</span>
                </h2>
                <p className="mb-10 text-lg font-light leading-relaxed text-poker-light/60">
                  De ex-jogadora profissional a uma das gestoras mais influentes do poker online, Júlia Luz traz uma bagagem de mais de 6 anos de mercado e um diferencial único: a visão humana.
                  <br /> <br />
                  Psicanalista e estudante de psicologia, ela entende que o poker vai muito além das cartas — é um jogo de mentes e emoções. Essa paixão pelo comportamento humano molda sua gestão, transformando o bem-estar e a segurança do jogador nos pilares de cada decisão.
                </p>
                <a
                  href="https://instagram.com/luzjuliaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 transition-all border group gap-5 bg-poker-dark-light rounded-2xl border-white/5 hover:border-poker-gold/30"
                >
                  <div className="flex items-center justify-center text-white rounded-full shadow-lg w-14 h-14 bg-poker-wine shadow-poker-wine/20">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-poker-light/40 mb-1">Siga a Gestora</p>
                    <p className="text-xl font-bold text-poker-gold">@luzjuliaa</p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CLUBES                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section id="clubs" className="relative py-16 md:py-32 bg-poker-dark/40 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <p className="mb-4 text-lg italic font-serif text-poker-gold md:text-xl">Nossas Parcerias</p>
            <h2 className="text-3xl font-bold uppercase md:text-5xl tracking-tight text-white">CLUBES DISPONÍVEIS</h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-poker-wine" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
            {CLUBS.map((club, index) => (
              <motion.div
                key={club.id}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", damping: 20 }}
                className="flex flex-col p-6 xl:p-8 transition-colors border bg-poker-dark border-white/5 rounded-[2rem] hover:border-poker-gold/30 group shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center overflow-hidden border transition-all w-16 h-16 bg-white/5 border-white/10 rounded-2xl group-hover:border-poker-gold/50 flex-shrink-0">
                    <img
                      src={PLATFORM_ICONS[club.platform]}
                      alt={club.platform === "pppoker" ? "PPPoker" : "Suprema"}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                  <span className="px-3 py-1 font-mono text-[13px] border rounded-full text-poker-gold bg-poker-gold/5 border-poker-gold/10">
                    {club.id.replace("ID: ", "")}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold uppercase text-white group-hover:text-poker-gold transition-colors">
                  {club.name}
                </h3>

                <p className="flex-grow mb-8 text-[14px] font-light leading-relaxed text-poker-light/50">
                  {club.description}
                </p>

                <a
                  href={club.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-poker-gold hover:gap-4 transition-all"
                  aria-label={`Saber mais sobre ${club.name}`}
                >
                  SAIBA MAIS <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="flex flex-col items-center justify-between p-10 mt-24 border shadow-2xl lg:flex-row bg-gradient-to-br from-poker-wine to-poker-wine-light rounded-3xl md:p-16 gap-10 shadow-poker-wine/20 border-white/10">
            <div className="max-w-2xl text-white">
              <h3 className="mb-4 text-3xl font-bold uppercase md:text-4xl tracking-tight">Dúvidas sobre como começar?</h3>
              <p className="text-lg font-light text-white/70">Nossa equipe está pronta para te auxiliar. Aprenda a entrar em poucos minutos ou fale com nosso suporte.</p>
            </div>
            <div className="flex flex-col w-full gap-4 sm:flex-row lg:w-auto">
              <button
                onClick={() => setSelectedVideo("4XfDS15rs-8")}
                className="flex items-center justify-center gap-3 px-8 py-5 text-sm font-bold transition-all border rounded-full uppercase bg-white/10 hover:bg-white/20 text-white border-white/20 tracking-widest"
              >
                VEJA COMO ENTRAR
              </button>
              <a
                href="https://wa.me/31991423608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-5 text-sm font-bold transition-all shadow-xl rounded-full uppercase bg-poker-light text-poker-dark hover:bg-white tracking-widest"
              >
                <MessageCircle size={22} /> SUPORTE WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FEEDBACKS                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section id="feedbacks" className="py-16 border-t md:py-32 border-white/5">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center md:mb-24">
            <p className="mb-4 text-lg italic font-serif text-poker-gold md:text-xl">O que dizem nossos jogadores</p>
            <h2 className="text-3xl font-bold uppercase md:text-5xl tracking-tight text-white">Feedbacks Reais</h2>
            <div className="mx-auto mt-6 h-1 w-16 md:w-20 bg-poker-gold md:mt-8" />
          </div>

          {/* Vídeos de depoimento */}
          <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3">
            {VIDEO_FEEDBACKS.map((video, index) => (
              <motion.div
                key={video.id}
                variants={FADE_UP}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden border shadow-2xl cursor-pointer aspect-video rounded-3xl border-white/5 shadow-black/50 group bg-poker-dark-light"
                onClick={() => setSelectedVideo(video.id)}
                role="button"
                aria-label={`Assistir ${video.title}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedVideo(video.id)}
              >
                <div className="absolute inset-0 z-10 flex items-center justify-center transition-all bg-black/40 group-hover:bg-black/20">
                  <div className="flex items-center justify-center transition-all transform rounded-full shadow-2xl w-12 h-12 bg-poker-gold group-hover:scale-110">
                    <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-poker-dark border-b-[8px] border-b-transparent" />
                  </div>
                </div>
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="object-cover w-full h-full transition-all opacity-80 group-hover:opacity-100"
                  loading="lazy"
                  width={320}
                  height={180}
                />
              </motion.div>
            ))}
          </div>

          {/* Depoimentos escritos */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FEEDBACKS.map((feedback, index) => (
              <motion.div
                key={feedback.name}
                variants={FADE_UP}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                transition={{ delay: index * 0.1 }}
                className="relative p-10 transition-all border bg-poker-dark-light border-white/5 rounded-3xl group hover:border-poker-wine/30 flex flex-col"
              >
                <div className="absolute transition-all top-10 right-10 text-poker-gold/10 group-hover:text-poker-gold/20" aria-hidden="true">
                  <Quote size={56} />
                </div>
                <div className="flex gap-1.5 mb-8" aria-label={`Avaliação: ${feedback.rating} de 5 estrelas`}>
                  {Array.from({ length: feedback.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-poker-gold fill-poker-gold" />
                  ))}
                </div>
                <p className="mb-10 text-lg font-light italic leading-relaxed text-poker-light/70">
                  "{feedback.comment}"
                </p>
                <div className="flex items-center gap-5 mt-auto">
                  <div
                    className="flex items-center justify-center font-bold border rounded-full w-12 h-12 bg-poker-wine/20 text-poker-wine border-poker-wine/30"
                    aria-hidden="true"
                  >
                    {feedback.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-poker-light">{feedback.name}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-poker-gold">{feedback.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                               */}
      {/* ------------------------------------------------------------------ */}

      <footer className="py-20 border-t backdrop-blur-md bg-poker-dark/80 border-white/5">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-12 mb-16 md:flex-row">
            <img src={logoluz} alt="Luz Club" className="w-auto h-10 opacity-80" width={100} height={40} loading="lazy" />

            <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-poker-light/40">
              <a href="#home" className="transition-colors hover:text-poker-gold">Início</a>
              <a href="#gestora" className="transition-colors hover:text-poker-gold">Gestora</a>
              <a href="#clubs" className="transition-colors hover:text-poker-gold">Clubes</a>
              <a href="#feedbacks" className="transition-colors hover:text-poker-gold">Feedbacks</a>
              <a href="#tutorial" className="transition-colors hover:text-poker-gold">Tutorial</a>
            </nav>

            <div className="flex items-center gap-8 text-poker-light/40">
              <a href="https://instagram.com/luz.poker" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-poker-gold">
                <Instagram size={22} />
              </a>
              <a href="https://wa.me/48996169605" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-colors hover:text-poker-gold">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between pt-12 border-t md:flex-row gap-6 border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-poker-light/20">
              © {new Date().getFullYear()} Luz Club. Todos os direitos reservados.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-poker-light/20">
              Desenvolvido para o esporte da mente.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de vídeo */}
      <VideoModal videoId={selectedVideo} onClose={closeVideo} />
    </div>
  );
}