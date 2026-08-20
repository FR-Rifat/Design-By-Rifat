import React from 'react'
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ProjectBanner } from './_components/project-banner';
import { projects } from '@/data/content';
import Overview from './_components/Overview';
import Challenges from './_components/Challenges';
import { notFound } from 'next/navigation';
import Gallery from './_components/Gallery';
import Toolstack from './_components/Toolstack';
import MoreProjects from './_components/MoreProjects';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const page = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }


  return (
    <div>
      <Header />
      <ProjectBanner project={project} />
      <Overview clientNeed={project.clientNeed} services={project.services} />
      <Challenges project={project} />
      <Gallery project={project} />
      <Toolstack project={project} />
      <MoreProjects/>
      <Footer />
    </div>
  );
}

export default page

