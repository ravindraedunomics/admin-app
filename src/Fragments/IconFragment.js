/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import { Container, Box, Card, CardHeader, Paper } from "@material-ui/core";


export default function IconFragment() {
    return (
        <Container fullwidth fullheight>

            <Card >
                <h4>Material Design Icons</h4>
                <p>
                    Handcrafted by our friends from{" "}
                    <a
                        href="https://design.google.com/icons/?ref=creativetime"
                        target="_blank"
                    >
                        Google
              </a>
                </p>
                <Box>
                    <iframe height="450px" width="100%"

                        src="https://material.io/icons/"
                        title="Icons iframe"
                    >
                        <p>Your browser does not support iframes.</p>
                    </iframe>
                </Box>
                <Card>
                    <h5>
                        The icons are visible on Desktop mode inside an iframe. Since
                        the iframe is not working on Mobile and Tablets please visit
                        the icons on their original page on Google. Check the
                  <a
                            href="https://design.google.com/icons/?ref=creativetime"
                            target="_blank"
                        >
                            Material Icons
                  </a>
                    </h5>
                </Card>

            </Card>

        </Container>
    );
}
