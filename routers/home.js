/* 
 * Copyright (C) 2017 Elvis Teixeira
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
const express = require('express');
const user = require('../models/user');
const router = module.exports = express.Router();

router.get('/', (req, res) => {
    // TODO set up sessions
    res.redirect('/home/login');
});

router.get('/login', (req, res) => {
    res.render('login.pug');
});

router.post('/login', (req, res) => {
    user.User.findOne({
        userName: req.body.uname,
        passWord: req.body.psswd
    }, (err, user) => {
        if (!err && user) {
            console.log('Found a valid user in DB');
        }
    });
    res.status(403);
    res.send('Incorrect credentials');
});

