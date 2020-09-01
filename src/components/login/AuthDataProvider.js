import React, { useState, useEffect, useMemo } from 'react'

const initialValue={session:false};

export const AuthDataContext = React.createContext(initialValue);