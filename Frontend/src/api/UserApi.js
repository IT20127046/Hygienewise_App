import React from 'react';
import axios from 'axios';
import ApiManager from './ApiManager';

export const userLogin = async data => {
    try {
        const result = await ApiManager("/user/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
}
