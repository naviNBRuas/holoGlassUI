
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				holo: {
					blue: "#3b82f6",
					purple: "#8b5cf6",
					pink: "#ec4899",
					cyan: "#06b6d4",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'holo-shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'rotate-gradient': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'blur-in': {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-top': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'page-transition-out': {
					'0%': { opacity: '1', transform: 'scale(1)' },
					'100%': { opacity: '0', transform: 'scale(0.95)' }
				},
				'page-transition-in': {
					'0%': { opacity: '0', transform: 'scale(1.05)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'holo-shimmer': 'holo-shimmer 6s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease infinite',
				'rotate-gradient': 'rotate-gradient 8s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'blur-in': 'blur-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-in-top': 'slide-in-top 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'ripple': 'ripple 0.7s ease-out forwards',
				'page-transition-out': 'page-transition-out 0.3s ease-in-out forwards',
				'page-transition-in': 'page-transition-in 0.5s ease-in-out forwards'
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'glass-inset': 'inset 0 0 30px rgba(255, 255, 255, 0.05)',
				'holo': '0 0 20px rgba(79, 70, 229, 0.45)',
				'neon': '0 0 5px theme(colors.holo.cyan), 0 0 20px theme(colors.holo.blue)',
				'glass-highlight': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
				'glass-border': 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
			},
			backgroundImage: {
				'holo-gradient': 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4)',
				'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
				'frosted-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03))',
				'subtle-dots': 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
				'holo-radial': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.7) 0%, rgba(59, 130, 246, 0.25) 25%, rgba(139, 92, 246, 0.15) 50%, rgba(236, 72, 153, 0.1) 75%, transparent 100%)',
			},
			backdropFilter: {
				'glass': 'blur(10px) saturate(180%)',
			},
			fontFamily: {
				sans: [
					'SF Pro Display',
					'Inter',
					'system-ui',
					'sans-serif',
				],
			},
			transitionTimingFunction: {
				'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
