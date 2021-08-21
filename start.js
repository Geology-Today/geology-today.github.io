/*
 * File: start.js                                                                        *
 * Project: bscgeology-xyz                                                               *
 * Created Date: We 08 yyyy                                                              *
 * Author: theKid Lestrange <thekid@lestrange-house.com>                                 *
 * -----                                                                                 *
 * Last Modified: Sat Aug 21 2021                                                        *
 * Modified By: theKid Lestrange <thekid@lestrange-house.com>                            *
 * -----                                                                                 *
 * Copyright (c) 2021 Lestrange World Domination Enterprises                             *
 * -----                                                                                 *
 * HISTORY:                                                                              *
 * Date      	By	Comments                                                             *
 * ----------	---	-------------------------------------------------------------------  *
 */

var fallback = require('express-history-api-fallback')
var express = require('express')
var app = express()
var root = __dirname + '/public'
app.use(express.static(root))
app.use(fallback('index.html', {
    root: root
}))
app.listen(3578, () => {
    console.log('server blender started on port 3578')
})