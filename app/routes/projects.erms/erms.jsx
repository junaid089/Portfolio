import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './erms.module.css';

const title = 'ERMS';
const description =
  'Educational Resource Management System for student performance tracking and automated reporting.';
const roles = ['Full-Stack Development', 'Database Schema Design', 'System Architecture'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function ERMS() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(80% 0.14 280);
              --accent: oklch(80% 0.14 280);
            }
            [data-theme='light'] {
              --primary: oklch(50% 0.18 280);
              --accent: oklch(50% 0.18 280);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.3}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View Source"
          url="https://github.com/junaid089"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet="/static/erms_dashboard_mockup.png 1280w, /static/erms_dashboard_mockup.png 2560w"
              width={1280}
              height={800}
              placeholder="/static/erms_dashboard_mockup.png"
              alt="ERMS modern administrative analytics panel showing student performance analytics, grade distributions, and resource allocations."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Educational institutions and training academies often struggle with fragmented 
              spreadsheets, disorganized class files, and manual grading reports. Overwhelming 
              administrative tasks can lead to high error rates in report generation, slow response 
              times, and lack of real-time insights for teachers, coordinators, and directors 
              trying to optimize curriculum delivery and track resource usage.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.textSection}>
              <ProjectSectionHeading>System Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Junaid engineered the Educational Resource Management System (ERMS) as a high-fidelity 
                Flask platform that interfaces with a robust relational database. Using SQLYOG, Junaid 
                designed optimized database schemas that manage thousands of student profiles, 
                course tracks, and exam metrics cleanly.
              </ProjectSectionText>
              <ProjectSectionText>
                The frontend utilizes Bootstrap, structured to prioritize fast-loading page speeds, 
                high accessibility, and responsive, fluid table listings. Teachers can record 
                attendance, key in exam grades, and update course contents through clean, 
                non-intrusive workflows.
              </ProjectSectionText>
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Automated Reporting Engine</ProjectSectionHeading>
              <ProjectSectionText>
                A core feature of the ERMS is its fully automated reporting pipeline. Instead of 
                generating report cards and grade matrices manually, Junaid's system compiles data 
                on-demand, calculating class averages, grade distributions, and student percentiles 
                instantly. 
              </ProjectSectionText>
              <ProjectSectionText>
                Administrative personnel can export beautifully formatted, print-ready reports 
                with a single click, saving hours of labor during active grading cycles.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Engineering Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Ultimately, Junaid's ERMS platform successfully digitized school workflows, 
                eliminating spreadsheet redundancy, reducing report-card generation times from days to 
                seconds, and providing teachers with instant visual performance charts. 
                The platform highlights Junaid's core ability to engineer scalable backend systems, 
                optimized database schemas, and clean, enterprise-focused web portals.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://github.com/junaid089"
              >
                View on GitHub
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

