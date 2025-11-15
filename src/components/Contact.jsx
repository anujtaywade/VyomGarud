import React, { useState } from 'react';
import { Phone, Mail, Clock, Circle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black py-20 px-6">
 
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 123, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 123, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
     
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-orange-500 text-sm font-semibold">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-400 text-lg">
            Reach out for UAV solutions and defense technology inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
   
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg text-white placeholder-gray-600 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg text-white placeholder-gray-600 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg text-white placeholder-gray-600 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>


          <div className="space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <div className="text-white font-semibold">+91 8881444693</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="text-white font-semibold">contact@vyomgarud.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Response Time</div>
                    <div className="text-white font-semibold">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Us</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Circle className="w-2 h-2 text-orange-500 fill-orange-500" />
                  <span className="text-gray-300">Military-grade reliability</span>
                </div>
                <div className="flex items-center gap-3">
                  <Circle className="w-2 h-2 text-orange-500 fill-orange-500" />
                  <span className="text-gray-300">Advanced autonomous systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Circle className="w-2 h-2 text-orange-500 fill-orange-500" />
                  <span className="text-gray-300">24/7 technical support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Circle className="w-2 h-2 text-orange-500 fill-orange-500" />
                  <span className="text-gray-300">Custom solutions available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;