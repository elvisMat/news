import React, { useState, useEffect, useRef, useContext, createContext, useReducer, useCallback } from 'react'
import {NewsContext} from './App'
// export let NewsContext = createContext([])

export function useNews() {
    return useContext(NewsContext);
}
