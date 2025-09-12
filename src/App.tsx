import React, { useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  User,
  CreditCard,
  Smartphone,
  Wifi,
  Car,
  Home,
  Gamepad2,
  ShoppingCart,
  Gift,
  TrendingUp,
  Award,
  Users,
  Clock,
  DollarSign,
  PieChart,
  BarChart3,
  Activity
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCabinetClick = () => {
    // Open cabinet project in new tab
    window.open('/cabinet/', '_blank');
  };

  const services = [
    {
      category: "Мобильная связь",
      icon: Phone,
      color: "from-purple-500 to-purple-600",
      providers: [
        { name: "Moldcell", logo: "🟣", commission: "2.5%" },
        { name: "Orange", logo: "🟠", commission: "3.0%" },
        { name: "Unite", logo: "🔵", commission: "2.0%" }
      ]
    },
    {
      category: "Интернет",
      icon: Wifi,
      color: "from-blue-500 to-blue-600",
      providers: [
        { name: "StarNet", logo: "⭐", commission: "1.5%" },
        { name: "Moldtelecom", logo: "📡", commission: "2.0%" },
        { name: "Sun Communications", logo: "☀️", commission: "0%" }
      ]
    },
    {
      category: "Коммунальные услуги",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
      providers: [
        { name: "Premier Energy", logo: "⚡", commission: "1.0%" },
        { name: "Termoelectrica", logo: "🔥", commission: "1.5%" },
        { name: "Apa-Canal", logo: "💧", commission: "1.0%" }
      ]
    },
    {
      category: "Транспорт",
      icon: Car,
      color: "from-green-500 to-green-600",
      providers: [
        { name: "Parking Chisinau", logo: "🅿️", commission: "0%" },
        { name: "Autobaza", logo: "🚌", commission: "2.0%" },
        { name: "Taxi Services", logo: "🚕", commission: "3.0%" }
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Безопасные платежи",
      description: "Все транзакции защищены банковским уровнем шифрования SSL"
    },
    {
      icon: Zap,
      title: "Мгновенные переводы",
      description: "Платежи обрабатываются в режиме реального времени 24/7"
    },
    {
      icon: Globe,
      title: "Широкая сеть",
      description: "Более 500 поставщиков услуг по всей Молдове"
    },
    {
      icon: Star,
      title: "Лучшие тарифы",
      description: "Минимальные комиссии и выгодные условия для всех услуг"
    }
  ];

  const stats = [
    { icon: Users, value: "2M+", label: "Активных пользователей" },
    { icon: CreditCard, value: "50M+", label: "Успешных платежей" },
    { icon: Clock, value: "24/7", label: "Круглосуточная поддержка" },
    { icon: Award, value: "#1", label: "Платформа в Молдове" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  OPLATA.MD
                </span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Контакты
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                onClick={handleCabinetClick}
                className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
                title="Личный кабинет"
              >
                <User className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/50">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Услуги
              </a>
              <a href="#about" className="block text-slate-600 hover:text-blue-600 font-medium transition-colors">
                О нас
              </a>
              <a href="#contact" className="block text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Контакты
              </a>
              <button 
                onClick={handleCabinetClick}
                className="block w-full text-left text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Личный кабинет
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 leading-tight">
              Платежи нового<br />поколения
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Оплачивайте все услуги в одном месте. Быстро, безопасно и с минимальными комиссиями.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleCabinetClick}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Начать платить</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-2xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Все услуги в одном месте
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Оплачивайте мобильную связь, интернет, коммунальные услуги и многое другое с минимальными комиссиями
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.category}</h3>
                  
                  <div className="space-y-3">
                    {service.providers.map((provider, providerIndex) => (
                      <div key={providerIndex} className="flex items-center justify-between p-3 bg-slate-50/50 rounded-xl hover:bg-blue-50/50 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{provider.logo}</span>
                          <span className="font-medium text-slate-700">{provider.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-green-600">{provider.commission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мы предоставляем самый удобный и безопасный способ оплаты всех ваших счетов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к миллионам пользователей, которые уже оценили удобство наших услуг
          </p>
          <button 
            onClick={handleCabinetClick}
            className="group px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <span>Войти в кабинет</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="ml-3 text-2xl font-bold">OPLATA.MD</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Ведущая платежная платформа Молдовы. Оплачивайте все услуги быстро, безопасно и с минимальными комиссиями.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Услуги</h3>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Мобильная связь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Интернет</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Коммунальные услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Транспорт</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Контакты</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+373 22 123 456</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>support@oplata.md</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Кишинев, Молдова</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 OPLATA.MD. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;