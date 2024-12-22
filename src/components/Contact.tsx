import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';

const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch">
      <p className="text-gray-400 text-center mb-12">Let's discuss your next project or opportunity</p>
      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                id="name"
                type="text"
                placeholder="Your name"
              />
              <Input
                label="Email"
                id="email"
                type="email"
                placeholder="your@email.com"
              />
            </div>
            <Input
              label="Subject"
              id="subject"
              type="text"
              placeholder="What's this about?"
            />
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <Button type="submit">
              <Send size={20} className="mr-2" />
              Send Message
            </Button>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-800">
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
