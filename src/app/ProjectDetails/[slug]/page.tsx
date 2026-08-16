import React from 'react'
import ProjectDetails from './_components/ProjectDetails';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ProjectBanner } from './_components/project-banner';
import { projects } from '@/data/content';
type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const page = async ({ params }: ProjectPageProps) => {
  const resolvedParams = await params;
  return (
    <div>
      <Header/>
      <ProjectBanner project={projects[0]} />
      <Footer/>
    </div>
  )
}

export default page

