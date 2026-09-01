import { useState } from "react";
import { Check, Copy, ExternalLink, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { CONTENT, LANGS, type Lang } from "@/lib/i18n";
import { Particles } from "@/components/Particles";
import { MusicPlayer } from "@/components/MusicPlayer";
import cover from "@/assets/cover-35.png.asset.json";
import heroBg from "@/assets/hero-flag.png.asset.json";
import gal1 from "@/assets/gal1.png.asset.json";
import gal2 from "@/assets/gal2.png.asset.json";
import gal3 from "@/assets/gal3.png.asset.json";
import gal4 from "@/assets/gal4.png.asset.json";
import gal5 from "@/assets/gal5.png.asset.json";

const GALLERY = [gal1, gal2, gal3, gal4, gal5];

function makeSlug(name: string) {
  const base =
    name
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 20) || "tabrik";
  return `${base}-${Math.random().toString(36).slice(2, 8)}`;
}

export function GreetingExperience({
  recipientName,
  senderName,
}: {
  recipientName?: string | null;
  senderName?: string | null;
}) {
  const [lang, setLang] = useState<Lang>("uz");
  const [coverOpen, setCoverOpen] = useState(true);
  const t = CONTENT[lang];

  const recipient = recipientName?.trim() || t.defaultRecipient;
  const sender = senderName?.trim() || t.defaultSender;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {coverOpen && <Cover t={t} onOpen={() => setCoverOpen(false)} />}

      {/* Fixed controls */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
        <MusicPlayer label={t.musicOn} />
        <div className="glass-panel flex h-11 items-center gap-1 rounded-full px-1.5">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`h-8 rounded-full px-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                lang === l
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24">
        <img
          src={heroBg.url}
          alt="O'zbekiston bayrog'i, Mustaqillik minorasi va Tinchlik yodgorligi"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-veil" />
        <Particles />
        <article className="glass-panel relative w-full max-w-2xl rounded-[2rem] p-7 sm:p-11 animate-rise">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            1991 — 2026
          </p>
          <h1 className="mt-4 text-center font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {t.heroTitle(recipient)} <span className="align-middle">🇺🇿</span>
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/70" />
          <div className="mt-6 space-y-4 text-center text-base leading-relaxed text-foreground/90 sm:text-lg">
            {t.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-7 text-center font-display text-xl text-uz-blue sm:text-2xl">
            {t.closing}
          </p>
          <p className="mt-5 text-center text-sm italic text-muted-foreground">
            {t.signOff(sender)}
          </p>
        </article>
      </section>

      {/* Gallery */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-28">
        <Particles count={16} />
        <div className="relative mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
            {t.galleryTitle}
          </h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">{t.gallerySub}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((img, i) => (
              <figure
                key={img.url}
                className={`group overflow-hidden rounded-2xl border border-gold/25 bg-card shadow-elegant ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <img
                  src={img.url}
                  alt={`${t.galleryTitle} ${i + 1}`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Brand + edit */}
      <div className="fixed bottom-4 left-4 z-40">
        <span className="glass-panel flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold tracking-tight text-uz-blue">
          WI
        </span>
      </div>
      <PersonalizeButton t={t} />
    </div>
  );
}

function Cover({ t, onOpen }: { t: (typeof CONTENT)["uz"]; onOpen: () => void }) {
  const [leaving, setLeaving] = useState(false);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-700 ${
        leaving ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={cover.url}
        alt="O'zbekiston Mustaqilligining 35 yilligi bezagi"
        className="absolute inset-0 h-full w-full animate-cover-in object-cover"
      />
      <div className="absolute inset-0 bg-gradient-veil" />
      <Particles count={22} />
      <div className="relative flex flex-col items-center px-6 text-center animate-rise">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          {t.coverKicker}
        </p>
        <h1 className="mt-4 max-w-xl font-display text-3xl leading-tight text-foreground sm:text-5xl">
          {t.coverTitle}
        </h1>
        <p className="mt-3 font-display text-xl text-uz-blue sm:text-2xl">{t.coverSub}</p>
        <Button
          variant="festive"
          size="lg"
          className="mt-9"
          onClick={() => {
            setLeaving(true);
            setTimeout(onOpen, 700);
          }}
        >
          {t.coverCta}
        </Button>
      </div>
    </div>
  );
}

function PersonalizeButton({ t }: { t: (typeof CONTENT)["uz"] }) {
  const [open, setOpen] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [saving, setSaving] = useState(false);
  const [link, setLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const save = async () => {
    if (!recipient.trim() || !sender.trim()) return;
    setSaving(true);
    setError(null);
    const slug = makeSlug(recipient);
    const { error: err } = await supabase.from("greetings").insert({
      slug,
      recipient_name: recipient.trim().slice(0, 60),
      sender_name: sender.trim().slice(0, 60),
    });
    setSaving(false);
    if (err) {
      setError(err.message);
      return;
    }
    setLink(`${window.location.origin}/tabrik/${slug}`);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) {
          setLink(null);
          setCopied(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={t.editTitle}
          className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-national text-primary-foreground shadow-elegant transition-transform hover:scale-110"
        >
          <Pencil className="h-5 w-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {link ? t.linkTitle : t.editTitle}
          </DialogTitle>
          <DialogDescription>{link ? "" : t.editDesc}</DialogDescription>
        </DialogHeader>

        {link ? (
          <div className="space-y-4">
            <p className="break-all rounded-lg border border-gold/30 bg-muted p-3 text-sm">
              {link}
            </p>
            <div className="flex gap-2">
              <Button
                className="flex-1"
                variant="festive"
                onClick={() => {
                  navigator.clipboard.writeText(link);
                  setCopied(true);
                }}
              >
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? t.copied : t.copy}
              </Button>
              <Button variant="outline" asChild>
                <a href={link}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t.open}
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">{t.recipientLabel}</Label>
              <Input
                id="recipient"
                maxLength={60}
                value={recipient}
                placeholder={t.recipientPh}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sender">{t.senderLabel}</Label>
              <Input
                id="sender"
                maxLength={60}
                value={sender}
                placeholder={t.senderPh}
                onChange={(e) => setSender(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button
              variant="festive"
              className="w-full"
              disabled={saving || !recipient.trim() || !sender.trim()}
              onClick={save}
            >
              {saving ? t.saving : t.save}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
