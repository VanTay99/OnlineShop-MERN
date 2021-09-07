import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal";
import Layout from "../../components/Layout";
import { Button, Row, Col, Container } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import Input from "../../components/UI/Input";
import linearCategories from "../../helpers/linearCategories";
import { useSelector } from "react-redux";
import Category from "../Category";
/**
 * @author
 * @function NewPage
 **/

export const NewPage = (props) => {
    const [createModal, setCreateModal] = useState(false);
    const [title, setTitle] = useState("");
    const category = useSelector(state => state.category);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [desc,setDesc]=useState('');
    const [banners,setBanners]=useState([]);
    const [products,setProducts]=useState([]);
    useEffect(() => {
        setCategories(linearCategories(category.categories));
    }, [category]);
    const handleProductImages=(e)=>{
        console.log(e);
    }
    const handleBannerImages=(e)=>{
        console.log(e);
    }
    const renderCreatePageModal = () => {
        return (
            <Modal
                show={createModal}
                modalTitle={"Create New Page"}
                handleClose={() => setCreateModal(false)}
            >
                <Container>
                    <Row>
                        <Col>
                            <select className="form-control form-control-sm"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                {
                                    categories.map(cat =>
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    )
                                }
                            </select>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder={"Page Title"}
                                className="form-control form-control-sm"
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Input
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder={"Page Desc"}
                                className=" form-control-sm"
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <input
                                type="file"
                                name="banners"
                                onChange={handleBannerImages}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <input
                                type="file"
                                name="products"
                                onChange={handleProductImages}
                            />
                        </Col>
                    </Row>
                </Container>

            </Modal>
        );
    };
    
    return (
        <Layout sidebar>
            {renderCreatePageModal()}
            <Button variant="primary" onClick={() => setCreateModal(true)}>
                <IoIosAdd />
                <span>Create Page</span>
            </Button>
        </Layout>
    );
};
