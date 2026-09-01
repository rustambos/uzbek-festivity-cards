CREATE TABLE public.greetings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  recipient_name text NOT NULL,
  sender_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.greetings TO anon;
GRANT SELECT, INSERT ON public.greetings TO authenticated;
GRANT ALL ON public.greetings TO service_role;

ALTER TABLE public.greetings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read greetings"
  ON public.greetings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create greetings"
  ON public.greetings FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(recipient_name) BETWEEN 1 AND 60
    AND length(sender_name) BETWEEN 1 AND 60
    AND length(slug) BETWEEN 4 AND 40
  );