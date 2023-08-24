const express = require('express');
const path = require('path');
const fs = require('fs');
const server = express();
const port = require('./config/port');
const setting = require('./config/setting');
port(server);setting(express,path,fs,server);