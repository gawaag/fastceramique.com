"use client"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { Instagram } from "lucide-react" // Only import necessary Lucide icons (Facebook removed)

export default function FooterAnimatedSocialCard() {
  return (
    <div className="footer-animated-social-card">
      <div className="background"></div>
      <div className="social-icons-wrapper">
        <Link href="https://www.instagram.com/lumen.car/" aria-label="Instagram">
          <Instagram />
        </Link>
        <Link
          href="https://www.snapchat.com/@lumencar75?invite_id=Gs9d-pP5&locale=fr_FR&share_id=1SwHALofRsiXWoYm42cMqQ&sid=4fd51b3df01249d492267a776f62fbaa"
          aria-label="Snapchat"
        >
          <Image
            src="/snapchat-logo.png" // Use the custom Snapchat image
            alt="Snapchat"
            width={32} // Set appropriate width
            height={32} // Set appropriate height
            className="social-icon-image" // Add a class for specific styling if needed
          />
        </Link>
        <Link href="https://www.tiktok.com/@mr.fast.ceramique" aria-label="TikTok">
          <Image
            src="/tiktok-logo.png" // Use the custom TikTok image
            alt="TikTok"
            width={32} // Set appropriate width
            height={32} // Set appropriate height
            className="social-icon-image" // Add a class for specific styling if needed
          />
        </Link>
      </div>
      <div className="box box1"></div>
      <div className="box box2"></div>
      <div className="box box3"></div>
      <div className="box box4"></div>
    </div>
  )
}
