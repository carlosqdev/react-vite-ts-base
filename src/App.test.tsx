/**
 * @jest-environment jsdom
 */
import React from "react"
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import App from "./App";


describe('App', function () {
  test('musth a heading with text hello word', () => { 
    render(<App />)
    const heading = screen.getByText(/hello word/i)

    expect(heading).toBeDefined()
   })
});