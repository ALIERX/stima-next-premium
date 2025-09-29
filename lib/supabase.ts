'use client'
import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined

export const supa = (url && key) ? createClient(url, key, { auth: { persistSession: true } }) : null
