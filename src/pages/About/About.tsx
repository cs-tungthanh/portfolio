import { Card } from '../../components/Card';
import { StyledAbout } from './About.styles';

export function About(): JSX.Element {
    return (
        <StyledAbout>
            <div className="row">
                <div className="col">
                    <h3>Introduction</h3>
                    <Card title="Anyhthing" />
                    <div className="row">Contacts</div>
                    <div className="row">Project</div>
                </div>
                <div className="col">
                    <div className="row">Contacts</div>
                    <div className="row">Contacts</div>
                    <div className="row">Contacts</div>
                </div>
                <div className="col">
                    <div className="row">Project</div>
                    <div className="row">Project</div>
                    <div className="row">Project</div>
                </div>
            </div>
        </StyledAbout>
    );
}
