import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory,addCategory } from '../../actions'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'

/**
* @author
* @function Category
**/

const Category = (props) => {
    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(`Category.js`)
        dispatch(getAllCategory());

    }, []);

    const handleClose = () =>{

        const form =new FormData();
        form.append('name',categoryName);
        form.append('parentId',parentCategoryId);
        form.append('categoryImage',categoryImage);
        dispatch(addCategory(form));
        // const cat={
        //     categoryName,
        //     parentCategoryId,
        //     categoryImage
        // };
        // console.log(cat);
        setShow(false);
    }
    
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let Mycategories = [];
        for (let category of categories) {
            Mycategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }
        return Mycategories;
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({
                value: category._id,
                name: category.name
            });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }
    const handleCategoryImage =(e)=>{
        setCategoryImage(e.target.files[0]);

    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Category</h3>
                            <Button variant="primary" onClick={handleShow}>Add</Button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}

                        </ul>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={categoryName}
                        placeholder={`Category Name`}
                        onChange={(e) => setCategoryName(e.target.value)}

                    />
                    <br/>
                    <select className="form-control" value={parentCategoryId} onChange={(e)=>setParentCategoryId(e.target.value)}>
                        <option>select Category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>
                    <br/>
                    <input type="file" name="categoryImage" onChange={handleCategoryImage}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    )

}

export default Category