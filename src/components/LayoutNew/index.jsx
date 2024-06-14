import { Col, Row } from 'antd';
import './Layout.css';

const LayoutComponentNew = ({rightColSize, rigthContent}) => {
    return (
        <div className="layout-container">
            <Row>
                <Col xs={rightColSize.xs} sm={rightColSize.sm} md={rightColSize.md} lg={rightColSize.lg}>
                    <div className="content-rigth">
                        {rigthContent}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default LayoutComponentNew;