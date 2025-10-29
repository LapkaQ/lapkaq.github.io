import React, { useState } from "react";
import { ExternalLink, Code, Monitor, Smartphone } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import wishesImage from "./assets/img/wishesaipng.png";
// import wishesaipng.png, wishesaipng2.png, wishesaipng3.png from assets/img
import wishesImage2 from "./assets/img/wishesaipng2.png";
import wishesImage3 from "./assets/img/wishesaipng3.png";
import mcwardrobe from "./assets/img/mcwardrobe.png";
import mcwardrobe2 from "./assets/img/mcwardrobe2.png";
import dcfaker from "./assets/img/dcfaker.png";
import dcfaker2 from "./assets/img/dcfaker2.png";
import rapdle from "./assets/img/rapdle.png";
import rapdle2 from "./assets/img/rapdle2.png";
import rapdle3 from "./assets/img/rapdle3.png";
import rapdle4 from "./assets/img/rapdle4.png";

export default function Portfolio() {
  const [projects] = useState([
    {
      id: 1,
      title: "System życzeń AI",
      description:
        "Aplikacja webowa z generowaniem życzeń przez AI. Użytkownik loguje się, wybiera kategorię i otrzymuje spersonalizowany tekst. Backend w FastAPI, frontend w React.",
      images: [
        wishesImage,
        wishesImage2,
        wishesImage3,
      ],
      url: null,
      tech: ["React", "FastAPI", "Zod"],
      year: "2025",
    },
    {
      id: 2,
      title: "MCWardrobe",
      description:
        "MCWardrobe to aplikacja webowa dla graczy Minecraft, umożliwiająca personalizację postaci. Użytkownik wpisuje nick swojego konta, a system pobiera aktualny skin postaci. Następnie można przymierzać dostępne ubrania i natychmiast podglądać je na swoim skinie, co pozwala na szybkie eksperymentowanie z wyglądem.",
      images: [
        mcwardrobe,
        mcwardrobe2,
      ],
      url: "https://mcwardrobe.toadres.pl",
      tech: ["React", "FastAPI"],
      year: "2025",
    },
    {
      id: 3,
      title: "DCFaker",
      description:
        "DC Faker to aplikacja webowa umożliwiająca interaktywne przeglądanie profili użytkowników oraz szczegółowych danych serwerów Discord. Dodatkowo pozwala na generowanie wiadomości realistycznie przypominających te z Discorda.",
      images: [
        dcfaker,
        dcfaker2,
      ],
      url: "https://dfmg.vercel.app/",
      tech: ["React", "NextJs", "Discord API"],
      year: "2025",
    },
    {
      id: 4,
      title: "Rapdle",
      description:
        "Interaktywna gra o muzyce rap. W trybie 'Raper' gracz zgaduje artystę na podstawie cech takich jak wiek, wytwórnia, miejsce urodzenia, liczba albumów i płeć, z wizualnym podświetleniem trafności odpowiedzi. W trybie 'Okładka' gracz rozpoznaje zdegradowane wizualnie okładki albumów. System Streaks nagradza kolejne poprawne odpowiedzi, a różne tryby gry – Normalny i Freestyle – oferują odmienne zasady przyznawania punktów i resetowania streaków.",
      images: [
        rapdle,
        rapdle2,
        rapdle3,
        rapdle4,
      ],
      url: "https://rapdle.vercel.app/",
      tech: ["React", "NextJs"],
      year: "2024",
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-yellow-300 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-2">
                Portfolio
              </h1>
              <p className="text-lg md:text-xl font-mono">
                Wojciech Gawryluk - Fullstack Developer
              </p>
            </div>
            <div className="border-4 border-black bg-white px-4 py-2 font-mono font-bold">
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto p-6 md:p-12">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="border-4 border-black bg-black text-white p-6">
                <h2 className="text-3xl font-black uppercase mb-4">O mnie</h2>
                <div className="w-16 h-1 bg-yellow-300 mb-4"></div>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  Cześć! Tworzę nowoczesne strony internetowe i aplikacje
                  webowe, stawiając na wydajność, estetykę i intuicyjność.
                  Łączę frontend z backendem, dzięki czemu każdy projekt jest
                  dopracowany nie tylko wizualnie, ale też technicznie.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  Pracuję głównie w React i FastAPI – tworzę funkcjonalne,
                  estetyczne strony internetowe i proste aplikacje webowe. Mam
                  doświadczenie w projektach obejmujących logowanie, integracje
                  oraz generowanie treści. Zależy mi na przejrzystym kodzie,
                  intuicyjnym interfejsie i solidnym działaniu każdego projektu.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="border-4 border-black px-6 py-3 font-mono font-bold hover:bg-yellow-300 transition-colors">
                    <Code className="inline-block w-5 h-5 mr-2" />
                    Clean Code
                  </div>
                  <div className="border-4 border-black px-6 py-3 font-mono font-bold hover:bg-yellow-300 transition-colors">
                    <Monitor className="inline-block w-5 h-5 mr-2" />
                    Responsive
                  </div>
                  <div className="border-4 border-black px-6 py-3 font-mono font-bold hover:bg-yellow-300 transition-colors">
                    <Smartphone className="inline-block w-5 h-5 mr-2" />
                    Mobile First
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto p-6 md:p-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Realizacje
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-1 bg-black w-24"></div>
              <p className="font-mono text-lg">
                {/* [{projects.length} projektów] */}
                [{projects.length} {projects.length === 1 ? "projekt" : projects.length <= 4 ? "projekty" : "projektów"}]
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-black uppercase mb-4">Kontakt</h3>
              <div className="space-y-2 font-mono">
                <p>Email: wojtekgaw2007@gmail.com</p>
                {/* <p>Tel: +48 123 456 789</p> */}
              </div>
            </div>
            <div className="md:text-right">
              <p className="font-mono text-sm text-gray-400">
                © {new Date().getFullYear()} Portfolio. Wszystkie prawa
                zastrzeżone.
              </p>
              <p className="font-mono text-xs text-gray-500 mt-2">
                Designed by Wojciech Gawryluk
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
