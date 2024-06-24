import { Col, Row } from 'antd';
import './Layout.css';

const LayoutComponentNew = ({ rigthContent}) => {
    return (
        <div className="layout-container">
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <div className="content-rigth">
                        {rigthContent}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default LayoutComponentNew;