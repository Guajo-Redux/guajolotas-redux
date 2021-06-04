import React from 'react'
import { ChakraProvider, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Productos from './Productos'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingProducts } from '../../actions/productAction'

const CategoriaProductos = () => {

    const dispatch = useDispatch()
    const categories = ["guajolotas", "bebidas", "tamales"]

    const handleClickCategorie = (category) => {
        dispatch(startLoadingProducts(category))

    }
    const { products } = useSelector(state => state.products)

    return (
        <ChakraProvider>
            <Tabs isFitted variant="enclosed" style={{ marginTop: "40px" }} color="#9A9A9D">
                <TabList borderBottom="none">
                    {categories.map(categoria => {
                        return (
                            <Tab _selected={{ color: "#FA4A0C", borderBottomColor: "#FA4A0C" }}
                                key={`${categoria}`}
                                onClick={() => {
                                    handleClickCategorie(categoria)
                                }}
                            >
                                {(categoria === "guajolotas")
                                    ?
                                    "Guajolotas"
                                    :
                                    (categoria === "bebidas")
                                        ?
                                        "Bebidas"
                                        :
                                        (categoria === "tamales")
                                            ?
                                            "Tamales"
                                            :
                                            ""
                                }
                            </Tab>
                        )
                    })}
                </TabList>
                <TabPanels>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos productos={products} />
                    </TabPanel>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos productos={products} />
                    </TabPanel>
                    <TabPanel paddingLeft="0" paddingRight="0">
                        <Productos productos={products} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ChakraProvider>
    )
}

export default CategoriaProductos