import LayoutComponentNew from '../../LayoutNew/index.jsx'
import FormNewP from '../../FormNewProd/index.jsx';
import Nav from '../../Nav/index.jsx';

const NewProd = () => {
    return (
        <>
        <Nav/>
        <LayoutComponentNew
            rightColSize={{ xs: 24, sm: 24, md: 24, lg: 24 }}
            rigthContent={<FormNewP />}
        />
        </>
    );
}

export default NewProd;