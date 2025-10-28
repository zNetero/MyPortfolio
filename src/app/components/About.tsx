"use client";
import Image from 'next/image';
import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageProvider';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-indigo-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 glow-title">{t('about_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="flex justify-center">
            <Image
              src="/Foto-1-100.jpg"
              alt="Your Photo"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            />
          </Reveal>
          
          <Reveal>
            <p className="text-lg text-gray-300 mb-4">
              {t('about_p1')}
            </p>
            <p className="text-lg text-gray-300">
              {t('about_p2')}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}