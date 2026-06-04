import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-ncsu-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-24">
        <h1 className="text-5xl font-tech text-ncsu-black mb-12 uppercase">Contact Us</h1>
        <div className="max-w-2xl bg-ncsu-black p-10 border-t-4 border-ncsu-red shadow-2xl">
          <h2 className="text-2xl font-tech text-ncsu-white mb-6 uppercase">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-ncsu-steel-gray font-tech text-xs uppercase tracking-widest mb-2">Email Address</label>
              <input type="email" className="w-full bg-ncsu-white/10 border border-ncsu-steel-gray/30 p-3 text-ncsu-white focus:border-ncsu-red outline-none transition-colors" placeholder="user@ncsu.edu" />
            </div>
            <div>
              <label className="block text-ncsu-steel-gray font-tech text-xs uppercase tracking-widest mb-2">Message</label>
              <textarea className="w-full bg-ncsu-white/10 border border-ncsu-steel-gray/30 p-3 text-ncsu-white h-32 focus:border-ncsu-red outline-none transition-colors" placeholder="How can we help?"></textarea>
            </div>
            <Button variant="primary" className="w-full">Send Message</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
