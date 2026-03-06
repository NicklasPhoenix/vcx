import { Inngest, NonRetriableError } from 'inngest'

// Create Inngest client with optional API key for build time
// During build, we use a dummy key to prevent initialization errors
const eventKey = process.env.INNGEST_EVENT_KEY || 'dev-placeholder-key'

export const inngest = new Inngest({
  id: 'vcx',
  name: 'VibeCode X-Ray',
  eventKey,
})

// Define event types
export const events = {
  AUDIT_STARTED: 'audit/started',
  AUDIT_COMPLETED: 'audit/completed',
  AUDIT_FAILED: 'audit/failed',
} as const

// Define audit job
export const processAudit = inngest.createFunction(
  { id: 'process-audit' },
  { event: events.AUDIT_STARTED },
  async ({ event, step }) => {
    const { auditId, repository, userId } = event.data as {
      auditId: string
      repository: string
      userId: string
    }

    // Step 1: Clone repository
    const repoPath = await step.run('clone-repo', async () => {
      console.log(`Cloning ${repository} for audit ${auditId}`)
      // In production: actual git clone
      return `/tmp/audits/${auditId}`
    })

    // Step 2: Analyze codebase
    const analysis = await step.run('analyze-codebase', async () => {
      console.log(`Analyzing codebase at ${repoPath}`)
      // In production: AI-powered code analysis
      return {
        issues: [],
        metrics: {},
        recommendations: [],
      }
    })

    // Step 3: Generate report
    await step.run('generate-report', async () => {
      console.log(`Generating report for audit ${auditId}`)
      // In production: generate PDF/markdown report
    })

    // Step 4: Notify user
    await step.run('notify-user', async () => {
      console.log(`Notifying user ${userId} about completed audit`)
      // In production: send email/notification
    })

    return { auditId, status: 'completed', analysis }
  }
)

// Export all functions for the serve handler
export const functions = [processAudit]
