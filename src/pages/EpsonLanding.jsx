import React from 'react';
import {
  CheckCircle,
  Leaf,
  Droplets,
  Zap,
  Cloud,
  Printer,
  ChevronRight,
  Plus,
  Minus,
  Star,
  ShieldCheck,
  TrendingDown,
  Globe
} from 'lucide-react';
import { epsonData } from '../mockData';

function EpsonLanding() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Printer className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tighter text-blue-700">EPSON</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#ecotank" className="hover:text-blue-600 transition-colors">EcoTank</a>
          <a href="#heat-free" className="hover:text-blue-600 transition-colors">Technologie</a>
          <a href="#comparatif" className="hover:text-blue-600 transition-colors">Comparatif</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg shadow-blue-100">
          Demander un devis
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3 h-3" /> Nouveau : Gamme EcoTank 2024
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            L'Avenir de l'Impression est <span className="text-blue-600">Sans Cartouche</span>.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            Réduisez vos coûts d'encre jusqu'à <span className="font-bold text-slate-900">90%</span> avec la révolution EcoTank. Une productivité bureau inégalée, la durabilité en plus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-200">
              Découvrir la gamme <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-bold transition-all">
              Calculer mes économies
            </button>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              <span className="text-slate-900 font-bold">50M+</span> d'utilisateurs EcoTank dans le monde
            </p>
          </div>
        </div>
        <div className="relative animate-in fade-in slide-in-from-right duration-1000">
          <div className="absolute -inset-4 bg-blue-400/10 rounded-full blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop"
            className="relative w-full rounded-2xl shadow-2xl border border-slate-100"
            alt="Epson EcoTank Printer"
          />
          {/* Floating Feature Tags */}
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Écologique</p>
              <p className="text-sm font-bold text-slate-900">Zéro Déchet Plastique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="font-bold text-2xl text-slate-400">LES NUMERIQUES</div>
          <div className="font-bold text-2xl text-slate-400">PC MAG</div>
          <div className="font-bold text-2xl text-slate-400">CNET</div>
          <div className="font-bold text-2xl text-slate-400">TECHRADAR</div>
          <div className="font-bold text-2xl text-slate-400">FORBES</div>
        </div>
      </section>

      {/* Core Features: EcoTank */}
      <section id="ecotank" className="py-24 px-6 max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Dites adieu aux cartouches. Définitivement.</h2>
          <p className="text-xl text-slate-600">
            Le système de réservoirs d'encre haute capacité Epson change tout. Remplissez-le une fois, imprimez pendant des années.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Droplets}
            title="Économie d'encre radicale"
            description="Économisez jusqu'à 90 % sur vos coûts d'impression jet d'encre grâce aux bouteilles d'encre haute capacité incluses."
          />
          <FeatureCard
            icon={TrendingDown}
            title="Faible Coût à la Page"
            description="Imprimez des milliers de pages avec une seule recharge. Idéal pour la productivité bureau intensive."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Garantie 3 Ans"
            description="Profitez d'une tranquillité d'esprit totale avec une extension de garantie gratuite incluse sur toute la gamme EcoTank."
          />
        </div>
      </section>

      {/* Heat-Free Technology Section */}
      <section id="heat-free" className="bg-blue-600 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-blue-500 rounded-3xl flex items-center justify-center p-8">
                  <Zap className="w-16 h-16 text-blue-200" />
                </div>
                <div className="aspect-[4/5] bg-blue-700 rounded-3xl flex flex-col justify-end p-6">
                  <p className="text-4xl font-black text-white">-83%</p>
                  <p className="text-sm font-medium text-blue-200">Consommation d'énergie</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-blue-800 rounded-3xl flex flex-col justify-end p-6">
                  <Globe className="w-12 h-12 text-blue-300 mb-4" />
                  <p className="text-sm font-medium text-blue-200">Impression durable sans émissions</p>
                </div>
                <div className="aspect-square bg-blue-400 rounded-3xl flex items-center justify-center p-8">
                  <Printer className="w-16 h-16 text-blue-900" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-white order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">Technologie Zéro Chaleur Epson</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Contrairement aux imprimantes laser, notre technologie jet d'encre n'utilise pas de chaleur pour éjecter l'encre.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-lg shrink-0">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Vitesse Instantanée</h4>
                  <p className="text-blue-100">Pas de temps de préchauffage nécessaire. La première page sort instantanément.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-lg shrink-0">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Consommation Énergétique Minimale</h4>
                  <p className="text-blue-100">Utilise beaucoup moins d'électricité qu'une imprimante laser standard.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-lg shrink-0">
                  <Cloud className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Productivité Connectée</h4>
                  <p className="text-blue-100">Connectivité Cloud et mobile native pour imprimer d'où vous voulez.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparatif" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-900">Quelle Epson est faite pour vous ?</h2>
          <p className="text-xl text-slate-600 italic">Un comparatif pour guider votre choix.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="px-6 py-8 text-left text-slate-400 font-bold uppercase tracking-widest text-xs">Modèle</th>
                <th className="px-6 py-8 text-left text-slate-400 font-bold uppercase tracking-widest text-xs">Cible</th>
                <th className="px-6 py-8 text-left text-slate-400 font-bold uppercase tracking-widest text-xs">Atout Majeur</th>
                <th className="px-6 py-8 text-left text-slate-400 font-bold uppercase tracking-widest text-xs">Vitesse</th>
                <th className="px-6 py-8 text-right text-slate-400 font-bold uppercase tracking-widest text-xs">Prix indicatif</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {epsonData.comparison.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-8 font-black text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{item.model}</td>
                  <td className="px-6 py-8 font-medium text-slate-600">{item.target}</td>
                  <td className="px-6 py-8">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {item.keyFeature}
                    </span>
                  </td>
                  <td className="px-6 py-8 text-slate-600 font-semibold">{item.speed}</td>
                  <td className="px-6 py-8 text-right font-black text-slate-900 text-xl">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-900">Questions Fréquentes</h2>
            <p className="text-slate-600">Tout ce qu'il faut savoir sur l'imprimante sans cartouche.</p>
          </div>

          <div className="space-y-4">
            {epsonData.faq.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h4 className="font-bold text-lg text-slate-800">{item.question}</h4>
                  {openFaq === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 animate-in slide-in-from-top-2 duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-600/10 blur-[120px]" />

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight relative z-10">
            Prêt à passer à l'impression durable ?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto relative z-10">
            Rejoignez des millions d'utilisateurs qui ont déjà dit adieu aux cartouches jetables et aux coûts cachés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-blue-500/20 active:scale-95">
              Obtenir mon offre personnalisée
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all border border-white/10">
              Voir tous les modèles
            </button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 opacity-50 relative z-10">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-green-400" /> Livraison Gratuite
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-green-400" /> Support Expert 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-200 rounded flex items-center justify-center">
              <Printer className="text-slate-500 w-4 h-4" />
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Epson Replica Design</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Design Concept pour EPSON. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-slate-400">
            <Star className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Globe className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
            <ShieldCheck className="w-5 h-5 hover:text-green-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group">
      <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
        <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default EpsonLanding;
