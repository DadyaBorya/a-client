import { z } from 'zod'

export const enableTotpSchema = z.object({
	pin: z.string().regex(/^\d{6}$/, {
		message: 'PIN-код має складатися з 6 цифр'
	})
})

export type TypeEnableTotpSchema = z.infer<typeof enableTotpSchema>
