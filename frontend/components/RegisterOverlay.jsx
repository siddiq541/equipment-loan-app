"use client";
import React from 'react';

const RegisterOverlay = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-70 backdrop-blur-sm">
            <div className="w-full max-w-md bg-nougat bg-opacity-95 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-rust">     
                <iframe
                    src="/register"
                    className="w-full h-[80vh] border-none" 
                    title="Register"
                />
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-rust text-white rounded hover:bg-rust-dark"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default RegisterOverlay;

