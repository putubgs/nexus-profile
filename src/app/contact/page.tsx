import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We're here to help and answer any question you might have"
      />
      <div className="container py-12 sm:py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, title: 'Visit us', content: '123 Business Street, City, State 12345, Country' },
            { icon: Phone, title: 'Call us', content: '+1 (234) 567-8900' },
            { icon: Mail, title: 'Email us', content: 'info@nexussolutions.com' },
            { icon: Clock, title: 'Working hours', content: 'Mon-Fri: 9AM - 5PM' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have a question or need more information? Don&apos;t hesitate to reach out. Our team is ready to assist you with any inquiries you may have.
          </p>
          <p className="text-gray-600">
            We strive to respond to all messages within 24 hours during business days. For urgent matters, please call us directly.
          </p>
        </div>
      </div>
    </div>
  )
}

