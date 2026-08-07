import React from 'react'
import ProjectDetails from './_components/ProjectDetails';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

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
      <ProjectDetails params={resolvedParams} />
      <Footer/>
    </div>
  )
}

export default page

