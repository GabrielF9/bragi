import { render } from 'mjml-react';

export default async function generateEmailWithoutTemplate(req, res) {
  const { id } = req.query;

  try {
    const EmailContent = require(`../../../emails/${id}.js`).default;

    const { html, errors } = render(<EmailContent />, {
      validationLevel: 'soft',
    });

    if (errors.length) {
      return res.status(500).json({
        errors,
      });
    }

    return res.send(html);
  } catch (e) {
    return res.status(500).json({
      error: `Cannot find email with name ${id}.js`,
      jsError: e.message,
    });
  }
}
