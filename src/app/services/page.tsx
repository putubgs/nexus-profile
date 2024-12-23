import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BadgeCheck, BarChart, Brain, Building } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

const services = [
  {
    title: "Strategic Consulting",
    description: "Comprehensive business strategy development and implementation guidance",
    icon: Brain,
  },
  {
    title: "Performance Optimization",
    description: "Improve operational efficiency and maximize business performance",
    icon: BarChart,
  },
  {
    title: "Corporate Development",
    description: "Strategic planning for sustainable business growth and expansion",
    icon: Building,
  },
  {
    title: "Quality Assurance",
    description: "Ensure excellence in all business processes and deliverables",
    icon: BadgeCheck,
  },
]

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Comprehensive solutions tailored to your business needs"
      />
      <div className="container py-12 sm:py-16 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="transition-all hover:shadow-lg hover:border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-blue-900">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-600/80">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

