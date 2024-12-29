"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import TwitterX from "./TwitterX";
import { infos } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { ContactModal } from "./contact-modal";

export function ProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const classNameButton =
    "text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400";
  return (
    <Card className="overflow-hidden bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-0 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-teal-200 dark:border-teal-700 shadow-lg relative">
            <Image
              alt="Profile"
              src={infos.avatar}
              className="object-cover h-24 w-24"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-teal-800 dark:text-teal-200">
              {infos.fullName}
            </h1>
            <p className="text-sm text-teal-600 dark:text-teal-400">
              {infos.status}
            </p>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            {infos.shortBio}
          </p>
        </div>

        <div className="mt-6">
          <Button
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Me
          </Button>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <a href={infos.github} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className={classNameButton}>
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href={infos.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className={classNameButton}>
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href={infos.x} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className={classNameButton}>
              <TwitterX className="h-5 w-5 fill-current" />
              <span className="sr-only">X (formerly Twitter)</span>
            </Button>
          </a>
          <a href={`mailto:${infos.mail}`}>
            <Button variant="ghost" size="icon" className={classNameButton}>
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </CardContent>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}
