import { Card } from '../../components/Card';
import { StyledAbout } from './About.styles';

export function About(): JSX.Element {
    return (
        <StyledAbout>
            <div className="col">
                <div className="chapter-title border">
                    introduction
                    <hr />
                </div>
                <Card title="Objective">
                    <ul>
                        <li>Become a CTO in the future</li>
                    </ul>
                </Card>
                <Card title="Personality traits">
                    <ul>
                        <li>Eager to learn new things</li>
                        <li>Be able to work as an individual or as a team</li>
                    </ul>
                </Card>
                <Card title="Interests">
                    <ul>
                        <li>I still not think about it</li>
                    </ul>
                </Card>
                <div className="chapter-title border">
                    education
                    <hr />
                </div>
                <Card title="Ho Chi Minh University of Technology">
                    <ul>
                        <li>2016-2020</li>
                        <li>Bachelor of Engineering - Computer Science</li>
                    </ul>
                </Card>
                <div className="chapter-title border">
                    contacts
                    <hr />
                </div>
                <Card title="Gmail">
                    <ul>
                        <li>cs.tungthanh@gmail.com</li>
                    </ul>
                </Card>
            </div>
            <div className="col">
                <div className="chapter-title border">
                    skills
                    <hr />
                </div>
                <Card title="Gmail">
                    <ul>
                        <li>cs.tungthanh@gmail.com</li>
                    </ul>
                </Card>
                <Card title="Gmail">
                    <ul>
                        <li>cs.tungthanh@gmail.com</li>
                    </ul>
                </Card>
                <Card title="Gmail">
                    <ul>
                        <li>cs.tungthanh@gmail.com</li>
                    </ul>
                </Card>
            </div>
            <div className="col">
                <div className="chapter-title border">
                    experiences
                    <hr />
                </div>
                <Card title="ZMP VietNam">
                    <ul>
                        <li>Software Engineer</li>
                    </ul>
                </Card>
                <Card title="Graphics and Computer Vision Lab (GVLab)">
                    <ul>
                        <li>Research assistant</li>
                    </ul>
                </Card>
                <Card title="CyberLogictec Viet Nam Co.">
                    <ul>
                        <li>Machine Learning Intern</li>
                    </ul>
                </Card>
            </div>
        </StyledAbout>
    );
}
