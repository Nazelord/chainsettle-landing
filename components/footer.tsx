import Link from "next/link"
import { navigation, footer } from "@/content/copy"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { BrandLogo } from "@/components/brand-logo"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <BrandLogo size={32} priority/>
            <span className="font-bold">ChainSettle</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center max-w-md">
            {footer.description}
          </p>
          
          <Separator className="w-full max-w-xs" />
          
          <div className="flex items-center space-x-6">
            {navigation.footer.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}